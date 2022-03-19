import { useCallback, useState } from "react";
import "./App.css";

const width = 900;
const height = 500;
const circleRadius = 30;
const intialMosuePosition = { x: width / 2, y: height / 2 };

function App() {
  const [mousePosition, setMousePosition] = useState(intialMosuePosition);

  const handleMouseMove = useCallback(
    (event) => {
      const { clientX, clientY } = event;
      setMousePosition({ x: clientX, y: clientY });
    },
    [setMousePosition]
  );

  return (
    <>
      <svg width={width} height={height} onMouseMove={handleMouseMove}>
        <circle cx={mousePosition.x} cy={mousePosition.y} r={circleRadius} />
      </svg>
    </>
  );
}

export default App;
