import React, { useState, useRef } from "react";
import "./stopwatch.css";
const calculatetime = (val) => {
  let t = val.current.innerHTML;
  let arr = t.split(":");
  let minutes = arr[0];
  let seconds = arr[1];
  let min = Number(minutes);
  let sec = Number(seconds);
  if (sec === 60) {
    min += 1;
    sec = 0;
  }
  sec += 1;
  let min1 = "";
  let sec1 = "";
  if (min.toString().length < 2) {
    min1 = "0" + min;
  } else {
    min1 = min;
  }
  if (sec.toString().length < 2) {
    sec1 = "0" + sec;
  } else {
    sec1 = sec;
  }
  val.current.innerHTML = min1 + ":" + sec1;
};
const Stopwatch = () => {
  const refval = useRef(null);
  const [time, setTime] = useState(0);
  const handlechange = (e) => {
    let val = e.target.innerHTML;
    if (val === "start") {
      e.target.innerHTML = "stop";
      let t = refval;
      let timer = setInterval(calculatetime, 1000, t);
      setTime(timer);
    } else {
      e.target.innerHTML = "start";
      clearInterval(time);
    }
  };
  const handlereset = (e) => {
    refval.current.innerHTML = "0:00";
    clearInterval(time);
  };
  return (
    <div>
      <h1>StopWatch</h1>
      <div style={{ display: "flex", margin: ".5rem" }}>
        <h3>Time:</h3>
        <h3 ref={refval}>0:00</h3>
      </div>
      <button onClick={handlechange} className="btn">
        start
      </button>
      <button onClick={handlereset} className="btn">
        reset
      </button>
    </div>
  );
};

export default Stopwatch;
