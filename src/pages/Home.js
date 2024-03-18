import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Home.css";
import { FaTrash } from "react-icons/fa";
import { ButtonGroup } from "react-bootstrap";

function Home() {
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("taskdata")) || []
  );
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task !== "") {
      const taskWithCapitalLetter =
        task.charAt(0).toUpperCase() + task.slice(1);
      const newData = [
        ...data,
        { id: Date.now(), task: taskWithCapitalLetter, importance: "Low" },
      ];
      setData(newData);
      localStorage.setItem("taskdata", JSON.stringify(newData));
      setTask("");
    }
  };

  const handleDelete = (id) => {
    const newData = data.filter((event) => event.id !== id);
    setData(newData);
    localStorage.setItem("taskdata", JSON.stringify(newData));
  };

  const handleImportance = (id, importance) => {
    const newData = data.map((task) => {
      if (task.id === id) {
        return { ...task, importance: importance };
      } else {
        return task;
      }
    });
    setData(newData);
    localStorage.setItem("taskdata", JSON.stringify(newData));
  };

  const handleSort = () => {
    const importanceLevels = {
      Low: 1,
      Medium: 2,
      High: 3,
    };

    const newData = [...data].sort((a, b) =>
      importanceLevels[a.importance] < importanceLevels[b.importance] ? 1 : -1
    );
    setData(newData);
  };

  return (
    <>
      <div className="container container-home">
        <Form onSubmit={handleSubmit}>
          <Form.Control
            type="text"
            placeholder="Write your task here.."
            maxLength={50}
            autoFocus
            value={task}
            onChange={(e) => setTask(e.target.value)}
            style={{
              fontSize: "1.2rem",
              fontWeight: "bold",
              height: "4rem",
            }}
          />
        </Form>

        <Button variant="dark" className="sort-button" onClick={handleSort}>
          Sort by Importance
        </Button>
        {data.length > 0 && (
        <div className="container-fluid task-display rounded-1">
          <hr />
          {data.map((task) => (
            <div key={task.id}>
              <div className="one-task">
                <h4 style={{
              fontWeight: "bold",
            }}>{task.task}</h4>
                <div className="buttons">
                  <Button
                    variant="danger"
                    onClick={() => handleDelete(task.id)}
                  >
                    <FaTrash />
                  </Button>

                  <ButtonGroup className="group-button">
                    <Button
                      variant={task.importance === "Low" ? "dark" : "secondary"}
                      onClick={() => handleImportance(task.id, "Low")}
                    >
                      Low
                    </Button>
                    <Button
                      variant={
                        task.importance === "Medium" ? "dark" : "secondary"
                      }
                      onClick={() => handleImportance(task.id, "Medium")}
                    >
                      Medium
                    </Button>
                    <Button
                      variant={
                        task.importance === "High" ? "dark" : "secondary"
                      }
                      onClick={() => handleImportance(task.id, "High")}
                    >
                      High
                    </Button>
                  </ButtonGroup>
                </div>
              </div>
              <hr />
            </div>
          ))}
        </div>
        )}
      </div>
    </>
  );
}

export default Home;
