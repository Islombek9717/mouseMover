import { useCallback, useEffect, useState } from "react";
import "./App.css";
import { csv, csvFormat } from "d3";
import { message } from "./components/SmileFace/message";

const width = 900;
const height = 500;
const circleRadius = 30;
const intialMosuePosition = { x: width / 2, y: height / 2 };

const csvUrl =
  "https://gist.githubusercontent.com/Islombek9717/944f98eca9e37edb5c81deeffca6322b/raw/cssNamedColors.csv";

function App() {
  const [mousePosition, setMousePosition] = useState(intialMosuePosition);
  const [data, setData] = useState(null);

  useEffect(() => {
    csv(csvUrl).then(setData);
  }, []);

  // const handleMouseMove = useCallback(
  //   (event) => {
  //     const { clientX, clientY } = event;
  //     setMousePosition({ x: clientX, y: clientY });
  //   },
  //   [setMousePosition]
  // );

  return (
    <div>
      {/* <svg width={width} height={height} onMouseMove={handleMouseMove}>
        <circle cx={mousePosition.x} cy={mousePosition.y} r={circleRadius} />
      </svg> */}
      <pre>{data ? message(data) : "Loading..."}</pre>
    </div>
  );
}

export default App;
