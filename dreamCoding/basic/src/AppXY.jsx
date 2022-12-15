import logo from "./logo.svg";
import "./AppXY.css";
import { useEffect, useState } from "react";

function App() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const changePosition = (x, y) => {
    setX(x);
    setY(y);
  };
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      changePosition(e.pageX, e.pageY);
    });
    return () => {
      console.log("removeEventListener");
      window.removeEventListener("mousemove", (e) => {
        changePosition(e.pageX, e.pageY);
      });
    };
  }, []);
  return (
    <div className="container">
      <div className="pointer" style={{ top: `${y}px`, left: `${x}px` }}></div>
    </div>
  );
}

export default App;
