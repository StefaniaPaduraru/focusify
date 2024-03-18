import React from "react";
import { useSearchParams } from "react-router-dom";
import "../pages/Home.css";

function SearchResults() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query'); 
  const data = JSON.parse(localStorage.getItem("taskdata")) || []; //Uploads saved tasks from localStorage, obtains the data as a string, and JSON.parse converts it back into a JavaScript object. If there is no saved data, an empty array will be used as the default value
  const results = data.filter((task) =>
  task.task && task.task.toLowerCase().includes(query.toLowerCase())
);
 //Filter tasks to find those that include your search term
  //task.task - the title/name of the task
  return (
    <div className="container-home">
      <h1>Search Results for "{query}"</h1>
      <div className="container-fluid task-display rounded-1">
        {results.map((task) => (
          <div key={task.id}>
            <div className="one-task">
              <h2>{task.task}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchResults;
