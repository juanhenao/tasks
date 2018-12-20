import React from "react";

import TaskAdder from "./TaskAdder";
import TaskList from "./TaskList";

const App = () => {
  return (
    <div className="ui container">
      <h1>Task Manager</h1>
      <div className="ui segment">
        <TaskAdder />
      </div>
      <div className="ui segment">
        <TaskList />
      </div>
    </div>
  );
};

export default App;
