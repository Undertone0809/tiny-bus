import { useState, useEffect } from "react";

interface EventBus {
  emit: (event: string, data: any) => void;
  subscribe: (event: string, callback: (data: any) => void) => () => void;
}

const createEventBus = (): EventBus => {
  const listeners = new Map<string, Set<(data: any) => void>>();
  const state = new Map<string, any>();

  return {
    emit(event: string, data: any) {
      state.set(event, data);
      listeners.get(event)?.forEach((fn) => fn(data));
    },
    subscribe(event: string, callback: (data: any) => void) {
      if (!listeners.has(event)) {
        listeners.set(event, new Set());
      }
      listeners.get(event)!.add(callback);
      // Send current value to new subscriber
      if (state.has(event)) {
        callback(state.get(event));
      }
      return () => listeners.get(event)!.delete(callback);
    },
  };
};

const eventBus = createEventBus();

export const useSubscribe = <T>(event: string, defaultValue: T): T => {
  const [value, setValue] = useState<T>(defaultValue);

  useEffect(() => {
    return eventBus.subscribe(event, setValue);
  }, [event]);

  return value;
};

export const emit = eventBus.emit;

export { eventBus };
