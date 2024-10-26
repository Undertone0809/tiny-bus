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
npm install tiny-bus

# or
yarn add tiny-bus

# or
pnpm add tiny-bus
```

## Usage

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

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
