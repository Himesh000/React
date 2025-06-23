import { useState } from "react";

function App() {
  const [color, setColor] = useState("Olive");

  return (
    <div
      className="w-screen h-screen duration-200"
      style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-black px-3 py-2 rounded-3xl">
          <button
            onClick={() => setColor("#606c38")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "#606c38" }}>
            Olive Green
          </button>
          <button
            onClick={() => setColor("#283618")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "#283618" }}>
            Deep Forest Green
          </button>
          <button
            onClick={() => setColor("#fefae0")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "#fefae0" }}>
            Ivory
          </button>
          <button
            onClick={() => setColor("#dda15e")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "#dda15e" }}>
            Goldenrod
          </button>
          <button
            onClick={() => setColor("#bc6c25")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "#bc6c25" }}>
            Rust
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
