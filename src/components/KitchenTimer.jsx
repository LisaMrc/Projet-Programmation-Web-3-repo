import { useState, useRef, useEffect } from "react";
import "./KitchenTimer.css";

export default function KitchenTimer() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [totalSeconds, setTotalSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    setTotalSeconds(hours * 3600 + minutes * 60 + seconds);
  }, [hours, minutes, seconds]);

  const formatTime = () => {
    const h = Math.floor(totalSeconds / 3600)
      .toString()
      .padStart(2, "0");
    const m = Math.floor((totalSeconds % 3600) / 60)
      .toString()
      .padStart(2, "0");
    const s = (totalSeconds % 60).toString().padStart(2, "0");
    return `${h}:${m}:${s}`;
  };

  const tick = () => {
    setTotalSeconds((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const toggleTimer = () => {
    if (isRunning) {
      clearInterval(intervalRef.current);
      setIsRunning(false);
    } else {
      if (totalSeconds > 0) {
        intervalRef.current = setInterval(tick, 1000);
        setIsRunning(true);
      }
    }
  };

  const resetTimer = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
    setTotalSeconds(0);
  };

  const handleInput = (setter) => (e) => {
    const value = Math.max(0, parseInt(e.target.value) || 0);
    setter(value);
  };

  return (
    <div className="kitchen-timer">
      <div className="timer-display">{formatTime()}</div>
      <div className="time-inputs">
        <input
          type="number"
          min="0"
          value={hours}
          onChange={handleInput(setHours)}
          disabled={isRunning}
          placeholder="HH"
        />
        <span>:</span>
        <input
          type="number"
          min="0"
          value={minutes}
          onChange={handleInput(setMinutes)}
          disabled={isRunning}
          placeholder="MM"
        />
        <span>:</span>
        <input
          type="number"
          min="0"
          value={seconds}
          onChange={handleInput(setSeconds)}
          disabled={isRunning}
          placeholder="SS"
        />
      </div>
      <div className="timer-buttons">
        <button onClick={toggleTimer}>{isRunning ? "Pause" : "Start"}</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
}