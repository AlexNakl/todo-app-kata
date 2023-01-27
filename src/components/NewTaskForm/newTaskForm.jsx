import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './newTaskForm.css';
import FormTimer from '../FormTimer';

class NewTaskForm extends Component {
  constructor() {
    super();
    this.state = {
      label: '',
      minutes: '',
      seconds: '',
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
    const { label, minutes, seconds } = this.state;
    onAddTask(label, minutes, seconds);
    this.setState({
      label: '',
      minutes: '',
      seconds: '',
    });
  };

  onMinChange = (event) => {
    this.setState({
      minutes: event.target.value,
    });
  };

  onSecChange = (event) => {
    this.setState({
      seconds: event.target.value,
    });
  };

  render() {
    const { label, minutes, seconds } = this.state;

    return (
      <form className="new-todo-form" onSubmit={this.onSubmit}>
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
        <FormTimer onMinChange={this.onMinChange} onSecChange={this.onSecChange} minutes={minutes} seconds={seconds} />
        {/* eslint-disable-next-line */}
        <button className="btn--hidden"type="submit" />
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
