import React, { useState } from 'react';
import './App.css';

function App() {
  const[timer, setTimer] = useState(0);
  const[timerInterval, setTimerInterval] = useState(null);

  // Function to start the timer
  const startTimer = () => {
      setTimerInterval(
        // use setInterval to update the timer every 1000 miliseconds(1 second)
        setInterval(() => {
              setTimer((prev) => prev + 1);
        }, 1000));
  };

  // Function to pause the timer
  const pauseTimer = () => {
    // Clear the interval to stop the timer from updating
     clearInterval(timerInterval);
  };

  // Function to reset the timer
  const resetTimer = () => {
    // Reset the timer value to 0
    setTimer(0);
    // Clear the Interval to stop the timer
    clearInterval(timerInterval);
  };

  // Render the timer and buttons in  the component
  return (
    <div className="App">
      <p>Timer : {timer}</p>
      <div>
        <button onClick={startTimer}>Start</button> &nbsp;
        <button onClick={pauseTimer}>Pause</button> &nbsp;
        <button onClick={resetTimer}>Reset</button> &nbsp;
      </div>
    </div>
  );
}

export default App;
