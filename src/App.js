import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [time, setTimer] = useState(0);
  const [run, setRun] = useState(false);

  useEffect(() => {
    let interval;
    if (run) {
      interval = setInterval(() => {
        setTimer((prevTime) => prevTime + 10);
      }, 10);
    } else if (!run) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [run]);
  return (
    <div className="flex flex-col items-center justify-center py-8">
      <h1 className="text-4xl font-semibold pb-2">Timer</h1>
      <div className="text-xl font-semibold py-4">
        <span>{"0" + Math.floor((time / 60000) % 60)}:</span>
        <span>{"0" + Math.floor((time / 1000) % 60)}:</span>
        <span>{"0" + Math.floor((time / 10) % 100)}:</span>
      </div>
      <div className="w-1/3 max-w-sm flex flex-row justify-evenly">
        {run ? (
          <button className="border rounded-lg py-1 px-5" onClick={() => setRun(false)}>
            Stop
          </button>
        ) : (
          <button className = "border rounded-lg py-1 px-3"onClick={() => setRun(true)}>Start</button>
        )}
        <button className = "border rounded-lg py-1 px-2.5"onClick={() => setTimer(0)}>Reset</button>
      </div>
    </div>
  );
}

export default App;
