import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "./CalendarActivities.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function CalendarActivities() {
  const [show, setShow] = useState(false);
  const [data, setData] = useState(JSON.parse(localStorage.getItem("dataKey")) || []);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(new Date());

  const closeModal = () => setShow(false); // Function to close the modal by setting 'show' to false
  const openModal = () => setShow(true); // Function to open the modal by setting 'show' to true

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    const newData = [...data, { id: Date.now(), title, description, date }]; // Create a new data object and add it to the existing data
    setData(newData); // Update the 'data' state with the new data
    localStorage.setItem("dataKey", JSON.stringify(newData));
    setTitle(""); // Reset the 'title' state to an empty string
    setDescription(""); // Reset the 'description' state to an empty string
    closeModal(); //Close modal
  };

  const handleDelete = (id) => {
    const newData = data.filter((event) => event.id !== id); // Filter out the data object with the given id
    setData(newData); // Update the 'data' state with the new data
    localStorage.setItem("dataKey", JSON.stringify(newData)); // Store the new data in local storage
  };
  ///The useEffect Hook allows to perform side effects in components
  useEffect(() => {
    localStorage.setItem("dataKey", JSON.stringify(data)); // Store the 'data' state in local storage whenever it changes
  }, [data]); // This effect runs whenever the 'data' state changes

  const filteredEvents = data.filter(
    (event) =>
      new Date(event.date).toDateString() === date.toDateString()
  );
  return (
    <div className="container container-calendar">
      <Calendar onChange={setDate} value={date} />
      <br />
      <button id="button-add" className="btn btn-lg rounded-5" onClick={openModal}>
        Add Event
      </button>
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        onHide={closeModal}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>Add your activity for this day</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter the title.."
                maxLength={10}
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                required
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                onChange={(e) => setDescription(e.target.value)}
                value={description}
              />
            </Form.Group>
            <Modal.Footer>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "20px",
                }}
              >
                <Button variant="secondary" onClick={closeModal}>
                  Close
                </Button>
                <Button type="submit" variant="primary">
                  Save Changes
                </Button>
              </div>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
      {filteredEvents.length > 0 && (
    <div className="container-fluid event-display">
      {filteredEvents.map((event) => (
        <div key={event.id} className="container div-calendar">
          <h3>{event.title}</h3>
          <p>{event.description}</p>
          <button
            className="btn btn-danger"
            onClick={() => handleDelete(event.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  )}
    </div>
  );
}

export default CalendarActivities;
