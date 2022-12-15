import logo from "./logo.svg";
import "./AppXY.css";
import { useEffect, useState } from "react";

function App() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  return (
    <div
      className="container"
      onPointerMove={(e) => {
        setX(e.clientX);
        setY(e.clientY);
      }}
    >
      <div
        className="pointer"
        style={{ transform: `translate(${x}px, ${y}px)` }}
      ></div>
    </div>
  );
}

export default App;
