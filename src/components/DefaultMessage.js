import React from "react";

function DefaultMessage() {
  const date = new Date();
  const options = { weekday: 'long', month: 'long', day: 'numeric' };
  const formattedDate = date.toLocaleDateString('en-US', options);
  ///toLocaleDateString of the Data object converts a date to a string by using local settings.
  return (
    <>
    <div className="container-fluid">
    <section className="container p-5">
      <h1>My Day</h1>
      <p id="current-date">{formattedDate}</p>
    </section>
    <div className="row">
    <div className="container col-7 p-5 my-5 mx-5 bg-light text-black-90 rounded">
    <h1>Focus on your day</h1>
        <p>Check your tasks in Home page,
           review your Calendar or study using the Pomorodo method</p>
      </div>
    </div>
    </div>
    </>
  );
}

export default DefaultMessage;
