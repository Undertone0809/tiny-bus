# Tiny Bus

A simple event bus implementation for React applications with TypeScript support. It allows for easy communication between components through event emission and subscription.

## Overview

Tiny Bus provides a lightweight and efficient way to manage events in your React application. It is designed to be easy to use and integrate with your existing codebase.

## Features

* Event emission and subscription
* Support for TypeScript
* Compatible with React 16.8.0 and above

## Installation

Install Tiny Bus using your preferred package manager:

```bash
npm install @zeeland/tiny-bus

# or
yarn add @zeeland/tiny-bus

# or
pnpm add @zeeland/tiny-bus
```

## Basic Usage

Tiny Bus provides a factory function to create a new instance of the event bus. This instance can then be used to emit events and subscribe to them.

```tsx
import { createEventBus } from "tiny-bus";

const eventBus = createEventBus();
```

Here's an example of how to use Tiny Bus to emit and subscribe to events:

```tsx
eventBus.emit("myEvent", { message: "Hello, world!" });

const unsubscribe = eventBus.subscribe("myEvent", (data) => {
  console.log(data);
});
```

If you need to subscribe to an event and get the current state of the event, you can use the `useSubscribe` hook:

```tsx
const data = useSubscribe("myEvent", 0);
```

## Using `useSubscribe` Hook

The `useSubscribe` hook is a convenient way to subscribe to events and automatically update your component when the event data changes. Here's how to use it:

```tsx
import { useSubscribe, emit } from "tiny-bus";

// Component that displays both counters
function CounterDisplay() {
  const counter1 = useSubscribe("counter1", 0);
  const counter2 = useSubscribe("counter2", 0);
  
  return (
    <div>
      <div>Counter 1: {counter1}</div>
      <div>Counter 2: {counter2}</div>
    </div>
  );
}

// Component with buttons to control both counters
function CounterControls() {
  const handleIncrement1 = () => {
    const currentValue = useSubscribe("counter1", 0);
    emit("counter1", currentValue + 1);
  };

  const handleIncrement2 = () => {
    const currentValue = useSubscribe("counter2", 0);
    emit("counter2", currentValue + 1);
  };

  return (
    <div>
      <button onClick={handleIncrement1}>Increment Counter 1</button>
      <button onClick={handleIncrement2}>Increment Counter 2</button>
    </div>
  );
}

// Example usage
function App() {
  return (
    <div>
      <CounterDisplay />
      <CounterControls />
    </div>
  );
}


```


## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
