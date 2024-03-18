import React from "react";
import "./DefaultMessage.css";
import { Container } from "react-bootstrap";

function DefaultMessage() {
  const date = new Date();
  const options = { weekday: 'long', month: 'long', day: 'numeric' };
  const formattedDate = date.toLocaleDateString('en-US', options);
  ///toLocaleDateString of the Data object converts a date to a string by using local settings.
  return (
    <>
    <Container className="container-fluid">
    <section className="container container-myday">
      <h1>My Day</h1>
      <p id="current-date">{formattedDate}</p>
    </section>
    <div className="row">
    <div className="container container-message bg-light rounded">
    <h1>Focus on your day</h1>
        <p>Check your tasks in Home page,<br/>
           review your Calendar <br/>
           or study using the Pomorodo method
        </p>
      </div>
    </div>
    </Container>
    </>
  );
}

export default DefaultMessage;
