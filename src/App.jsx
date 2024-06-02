import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  //   let counter = 0
  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    } else {
      setCounter = counter;
    }
  };

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      setCounter = (counter);
    }
  };
  return (
    <div className="container">
      <h1>Counter App</h1>
      <h2>Counter Value: {counter}</h2>
      <button className="increase" onClick={addValue}>
        Increase
      </button>
      <button className="decrease" onClick={removeValue}>
        Decrease
      </button>
    </div>
  );
}

export default App;
