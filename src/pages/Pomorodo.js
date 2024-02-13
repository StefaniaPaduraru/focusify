import React, { useState, useEffect, useRef } from "react";
import "./Pomorodo.css";
import { FaInfo } from "react-icons/fa";
import * as bootstrap from "bootstrap";

function Pomorodo() {
  const [timer, setTimer] = useState(50 * 60); // 50 minutes
  const [isActive, setIsActive] = useState(false);
  const [sessions, setSessions] = useState([]);
  const [currentSession, setCurrentSession] = useState(1);
  const popoverListRef = useRef([]);

  useEffect(() => {
    let interval = null;
    if (isActive && timer > 0) {
      interval = setInterval(() => {
        setTimer((timer) => timer - 1);
      }, 1000);
    } else if (timer === 0) {
      clearInterval(interval);
      setSessions([...sessions, { session: currentSession, time: 50 * 60 }]); // Add the current session to the sessions list
      setCurrentSession(currentSession + 1);
      setTimer(50 * 60);
    }
    return () => clearInterval(interval); // Clear the interval when the component is unmounted or when 'isActive' or 'timer' changes
  }, [isActive, timer]); // This effect runs whenever 'isActive' or 'timer' changes

    
  useEffect(() => {
    // Get all elements in the document that have the attribute 'data-bs-toggle="popover"'
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))

    // For each element in popoverTriggerList, create a new Bootstrap Popover instance
    /// PopoverListRef is a ref that will keep the reference to the list of Popover instances between renditions. PopoverListRef.current accesses the list of instances
    popoverListRef.current = popoverTriggerList.map(function (popoverTriggerEl) {
      return new bootstrap.Popover(popoverTriggerEl)
    })
  }, []);// This effect runs once when the component mounts

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
    ]); // Add the current session to the sessions list with the elapsed time
    setCurrentSession(currentSession + 1);
    setTimer(50 * 60);
  };

  return (
    <>
      <div className="container container-pomo">
      <button
          type="button"
          className="btn btn-outline-secondary rounded-5"
          data-bs-placement="left"
          data-bs-toggle="popover"
          title="What is Pomodoro Technique?"
          data-bs-content="The Pomodoro Technique is created by Francesco Cirillo for a more productive way to work and study. The technique uses a timer to break down work into intervals, traditionally 25 minutes in length, separated by short breaks. Each interval is known as a pomodoro, from the Italian word for 'tomato', after the tomato-shaped kitchen timer that Cirillo used as a university student."
        >
          <FaInfo/>
        </button>

        <button className="btn btn-success" onClick={addSession}>
          Add Session
        </button>
        <br />
        <div className="container-lg shadow mb-4 p-4 border border-dark rounded-3">
          <fieldset id="timer">
            <div id="timer-string">
              {Math.floor(timer / 60)}:
              {timer % 60 < 10 ? `0${timer % 60}` : timer % 60}
            </div>
            <div id="sessions">Current Session: {currentSession}</div>
            <div className="timer-buttons">
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
          <hr />
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
