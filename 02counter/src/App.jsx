import { use, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);

  function incValue() {
    if (counter < 20) {
      setCounter(counter + 1);
    }
  }

  function decValue() {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  }

  return (
    <>
      <h1>COUNTER</h1>
      <h2>Counter Value : {counter}</h2>

      <button onClick={incValue}>Increase Value</button>
      <button onClick={decValue}>Decrease Value</button>
    </>
  );
}

export default App;

//Notes :-
// Hooks in React are used to add features like state, side effects, and more to functional components.
