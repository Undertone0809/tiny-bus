import React from "react";
import "./App.css";
import { useSubscribe, emit } from "tiny-bus";

const Counter = ({ id }: { id: number }) => {
  const count = useSubscribe<number>(`count${id}`, 0);
  console.log(`Counter ${id} rendered, count:`, count);

  return (
    <div>
      <h2>
        Counter {id}: {count}
      </h2>
      <button onClick={() => emit(`count${id}`, count + 1)}>Increment</button>
      <button onClick={() => emit(`count${id}`, count - 1)}>Decrement</button>
    </div>
  );
};

// Display component for all counters
const Display = () => {
  const count1 = useSubscribe<number>("count1", 0);
  const count2 = useSubscribe<number>("count2", 0);
  const count3 = useSubscribe<number>("count3", 0);

  return (
    <div>
      <h3>Current counts:</h3>
      <p>Counter 1: {count1}</p>
      <p>Counter 2: {count2}</p>
      <p>Counter 3: {count3}</p>
      <p>Total: {count1 + count2 + count3}</p>
    </div>
  );
};

// Reset all counters
const ResetAll = () => {
  const resetAll = () => {
    emit("count1", 0);
    emit("count2", 0);
    emit("count3", 0);
  };

  return (
    <div>
      <button onClick={resetAll}>Reset All</button>
    </div>
  );
};

function App() {
  console.log("App component rendered");
  return (
    <div className="App">
      <h1>Tiny Bus Example - Multiple Counters</h1>
      <Counter id={1} />
      <Counter id={2} />
      <Counter id={3} />
      <Display />
      <ResetAll />
    </div>
  );
}

export default App;
