import React, { useState, useEffect } from "react";
import './Pomorodo.css';

function Pomorodo() {
  const [timer, setTimer] = useState(50 * 60); // 50 minutes
  const [isActive, setIsActive] = useState(false);
  const [sessions, setSessions] = useState([]);
  const [currentSession, setCurrentSession] = useState(1);

  useEffect(() => {
    let interval = null;
    if (isActive && timer > 0) {
      interval = setInterval(() => {
        setTimer((timer) => timer - 1);
      }, 1000);
    } else if (timer === 0) {
      clearInterval(interval);
      setSessions([...sessions, { session: currentSession, time: 50 * 60 }]);
      setCurrentSession(currentSession + 1);
      setTimer(50 * 60);
    }
    return () => clearInterval(interval);
  }, [isActive, timer]);

  const startTimer = () => {
    setIsActive(true);
  };

  const stopTimer = () => {
    setIsActive(false);
  };

  const restartTimer = () => {
    if (window.confirm("Are you sure you want to reset the timer?")) {
      setIsActive(false);
      setTimer(50 * 60);
      setSessions([]);
      setCurrentSession(1);
    }
  };

  const addSession = () => {
    setIsActive(false);
    setSessions([
      ...sessions,
      { session: currentSession, time: 50 * 60 - timer },
    ]);
    setCurrentSession(currentSession + 1);
    setTimer(50 * 60);
  };

  return (
    <>
      <div className="container container-pomo">
      <button className="btn btn-success" onClick={addSession}>
            Add Session
          </button>
          <br/>
        <div className="container-lg shadow mb-4 p-4 border border-dark rounded-3">
          <fieldset id="timer">
          <div id="timer-string">
            {Math.floor(timer / 60)}:
            {timer % 60 < 10 ? `0${timer % 60}` : timer % 60}
          </div>
          <div id="sessions">Current Session: {currentSession}</div>
          <div class="timer-buttons">
          <button className="btn btn-dark" onClick={startTimer}>
            Start
          </button>
          <button className="btn btn-danger" onClick={stopTimer}>
            Stop
          </button>
          <button className="btn btn-primary" onClick={restartTimer}>
            Restart
          </button>
          </div>
          </fieldset>
          <hr/>
          <fieldset id="history">
            <legend>Session History:</legend>
          <div id="history">
            {sessions.map((session, index) => (
              <p key={index}>
                Session {session.session}: {Math.floor(session.time / 60)}:
                {session.time % 60 < 10
                  ? `0${session.time % 60}`
                  : session.time % 60}
              </p>
            ))}
          </div>
          </fieldset>
        </div>
      </div>
    </>
  );
}

export default Pomorodo;
