import { useEffect, useState } from "react";
import dayjs from "dayjs";
import "./App.css";

function App() {
  const [count, setCount] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);

  const getBinary = () => {
    const current = dayjs();
    const setpoint = dayjs("2023-08-23");

    const diff = current.diff(setpoint, "day");

    const binary = diff.toString(2);

    const binaryArray = binary.split("");
    const len = binaryArray.length;
    const copyArray = [...count];
    copyArray.splice(-len, len, ...binaryArray);
    setCount(copyArray);
  };

  useEffect(() => {
    const interval = setInterval(getBinary, 1440000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    getBinary();
  }, []);

  const draw = () => {
    return count.map((item) => {
      if (item == 0) {
        return (
          <div
            style={{
              width: "100%",
              height: "100%",
              background: "black",
              border: "1px solid white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          />
        );
      }
      return (
        <div
          style={{
            width: "100%",
            height: "100%",
            background: "black",
            border: "1px solid white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          ⚪
        </div>
      );
    });
  };

  return (
    <div
      style={{
        display: "flex",
        width: "1200px",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "80%",
          height: "50px",
          display: "flex",
        }}
      >
        {draw()}
      </div>
    </div>
  );
}

export default App;
