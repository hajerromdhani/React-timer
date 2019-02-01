import React from "react";

function CalculTimer(val) {
  let time, hour, minute, second, reste, reste1, day;
  time = Math.floor(val / 1000);
  day = Math.floor(time / 86400);
  reste = time % 86400;
  hour = Math.floor(reste / 3600);
  reste1 = reste % 3600;
  minute = Math.floor(reste1 / 60);
  second = reste1 % 60;
  return { hour, minute, second };
}

const Timer = props => {
  let calc = CalculTimer(props.timems);
  return (
    <div className="div-date">
      <div className="timer-div">
        <div>
          <h1>{String(calc.hour).padStart(2, "0")}:</h1>
          <h5>Hour</h5>
        </div>
        <div>
          <h1>{String(calc.minute).padStart(2, "0")}:</h1>
          <h5>Minute</h5>
        </div>
        <div>
          <h1>{String(calc.second).padStart(2, "0")}</h1>
          <h5>Second</h5>
        </div>
      </div>
    </div>
  );
};
export default Timer;
