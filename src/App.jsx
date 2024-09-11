import React from "react";
import useCustomTimer from "./useCustomTimer";

function App() {
  const { isRunning, start, stop, seconds } = useCustomTimer(10);

  return (
    <div className="countdown">
      <h1>Countdown Timer Custom Hook</h1>
      <h4>{isRunning ? seconds : "No Timer Running"}</h4>
      <button disabled={isRunning} onClick={start}>
        Start
      </button>
      <button disabled={!isRunning} onClick={stop}>
        Stop
      </button>
    </div>
  );
}

export default App;
