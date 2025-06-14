import Test from "./Test.jsx";
import "./App.css";

function App() {
  const username = "Himesh Verma";

  return (
    <>
      <Test />
      <h1>{username}</h1> 
    </>
  );
}

export default App;


//Notes:-
//In React, an "evaluated expression" is any valid JavaScript expression inside {} in JSX that returns a value for rendering.
