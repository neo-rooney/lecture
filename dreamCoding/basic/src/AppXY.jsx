import logo from "./logo.svg";
import "./AppXY.css";
import { useEffect, useState } from "react";

function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  return (
    <div
      className="container"
      onPointerMove={(e) => {
        setPosition({ x: e.clientX, y: e.clientY });
      }}
    >
      <div
        className="pointer"
        style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
      ></div>
    </div>
  );
}

export default App;
