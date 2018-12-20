import React from "react";
import { connect } from "react-redux";

import Task from "./Task";

const generateList = tasks => {
  return tasks.map(value => {
    return <Task key={value} text={value} />;
  });
};

const TaskList = props => {
  return (
    <div className="ui relaxed divided list">{generateList(props.tasks)}</div>
  );
};

const mapStateToProps = state => {
  return { tasks: state.tasks };
};

export default connect(mapStateToProps)(TaskList);
