import { useEffect, useState } from "react";

function App() {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => setTime((time) => time + 1), 1000);
    }

    return () => clearInterval(intervalId);
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(!isRunning);
  };

  const handleStop = () => {
    setIsRunning(false);
    setTime(0);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="App">
      <h1>Stopwatch</h1>
      <p>Time: {formatTime(time)}</p>
      <button onClick={handleStart}>{isRunning ? "Stop" : "Start"}</button>
      <button onClick={handleStop}>Reset</button>
    </div>
  );
}

export default App;
