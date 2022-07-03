import { useState } from "react";

function FunctionalComponent() {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    setCounter(counter - 1);
  };
  return (
    <div>
      <div>Counter Value is: {counter}</div>
      <div>
        <button onClick={increment}>Increment </button>
        <button onClick={decrement}>Decrement </button>
      </div>
    </div>
  );
}

export default FunctionalComponent;
