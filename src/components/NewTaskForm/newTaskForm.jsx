import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './newTaskForm.css';

class NewTaskForm extends Component {
  constructor() {
    super();
    this.state = {
      label: '',
    };
  }

  onLabelChange = (event) => {
    this.setState({
      label: event.target.value,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    const { onAddTask } = this.props;
    const { label } = this.state;
    onAddTask(label);
    this.setState({
      label: '',
    });
  };

  render() {
    const { label } = this.state;

    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          name="newTask"
          className="new-todo"
          placeholder="What needs to be done?"
          value={label}
          onChange={this.onLabelChange}
          minLength={1}
          maxLength={50}
          pattern="^\S+(.*)$"
          required
        />
      </form>
    );
  }
}

NewTaskForm.defaultProps = {
  onAddTask: () => {},
};

NewTaskForm.propTypes = {
  onAddTask: PropTypes.func,
};

export default NewTaskForm;
