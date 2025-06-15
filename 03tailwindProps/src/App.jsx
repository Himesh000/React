import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="bg-green-500 text-black p-4 rounded-xl">Tailwind Test</h1>
      <Card cardNumber="#1" cardPrice="0.01"/>
      <Card cardNumber="#2" cardPrice="0.02"/>
    </>
  );
}

export default App;
