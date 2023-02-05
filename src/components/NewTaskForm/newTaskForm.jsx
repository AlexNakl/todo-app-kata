import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './newTaskForm.css';
import FormTimer from '../FormTimer';

function NewTaskForm({ onAddTask }) {
  const [label, setLabel] = useState('');
  const [minutes, setMinutes] = useState('');
  const [seconds, setSeconds] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    onAddTask(label, minutes, seconds);
    setLabel('');
    setMinutes('');
    setSeconds('');
  };
  const onLabelChange = (event) => setLabel(event.target.value);
  const onMinChange = (event) => setMinutes(event.target.value);
  const onSecChange = (event) => setSeconds(event.target.value);

  return (
    <form className="new-todo-form" onSubmit={onSubmit}>
      <input
        type="text"
        name="newTask"
        className="new-todo"
        placeholder="What needs to be done?"
        value={label}
        onChange={onLabelChange}
        minLength={1}
        maxLength={50}
        pattern="^\S+(.*)$"
        required
      />
      <FormTimer onMinChange={onMinChange} onSecChange={onSecChange} minutes={minutes} seconds={seconds} />
      {/* eslint-disable-next-line */}
        <button className="btn--hidden"type="submit" />
    </form>
  );
}

NewTaskForm.defaultProps = {
  onAddTask: () => {},
};

NewTaskForm.propTypes = {
  onAddTask: PropTypes.func,
};

export default NewTaskForm;
