import React, { useState, useEffect } from "react";
import "./Timer.css";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const toggleRunning = () => {
    setIsRunning((prev) => !prev);
  };

  const resetTimer = () => {
    setSeconds(0);
    setIsRunning(false);
  };

  return (
    <div className="timer-container">
      <h1>Таймер: {seconds} c</h1>
      <div className="timer-buttons">
        <button onClick={toggleRunning}>
          {isRunning ? "Пауза" : "Продовжити"}
        </button>
        <button onClick={resetTimer}>Скинути</button>
      </div>
    </div>
  );
};

export default Timer;
