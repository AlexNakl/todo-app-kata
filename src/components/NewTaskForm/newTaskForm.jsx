import React from 'react';
import PropTypes from 'prop-types';
import './newTaskForm.css';

function NewTaskForm({ onAddTask }) {
  return (
    <input
      type="text"
      className="new-todo"
      placeholder="What needs to be done?"
      onKeyDown={(event) => onAddTask(event)}
    />
  );
}

NewTaskForm.defaultProps = {
  onAddTask: () => {},
};

NewTaskForm.propTypes = {
  onAddTask: PropTypes.func,
};

export default NewTaskForm;
