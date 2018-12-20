import React from "react";
import { connect } from "react-redux";
import { addTask } from "../actions";

class TaskAdder extends React.Component {
  state = { task: "" };

  preventSubmit = e => {
    e.preventDefault();
    this.setState({ task: "" });
  };

  onAddClick = () => {
    this.props.addTask(this.state.task);
  };

  onChangeText = e => {
    this.setState({ task: e.target.value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.preventSubmit}>
          <div className="ui action fluid input">
            <input
              type="text"
              value={this.state.task}
              placeholder="Write down a task"
              onChange={this.onChangeText}
            />
            <button
              onClick={this.onAddClick}
              className="ui primary icon button"
            >
              <i className="add icon" />
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { tasks: state.tasks };
};

export default connect(
  mapStateToProps,
  { addTask }
)(TaskAdder);
