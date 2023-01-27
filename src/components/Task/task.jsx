import React from 'react';
import PropTypes from 'prop-types';

import TimeAgo from '../TimeAgo';
import Timer from '../Timer';
import './task.css';

function Task({ id, label, minutes, seconds, isDone, createdTime, onEditTask, onDeleteTask, onToggleDone }) {
  return (
    <div className="view">
      <input id={id} className="toggle" type="checkbox" onChange={onToggleDone} checked={isDone} />
      <label htmlFor={id}>
        <span className="title">{label}</span>
        <Timer minutes={minutes} seconds={seconds} />
        <TimeAgo createdTime={createdTime} />
      </label>
      {/* eslint-disable-next-line */}
      <button type="button" className="icon icon-edit" onClick={onEditTask} />
      {/* eslint-disable-next-line */}
      <button type="button" className="icon icon-destroy" onClick={onDeleteTask} />
    </div>
  );
}

Task.defaultProps = {
  label: 'default task',
  minutes: '',
  seconds: '',
  isDone: false,
  createdTime: Date.now(),
  onEditTask: () => {},
  onDeleteTask: () => {},
  onToggleDone: () => {},
};

Task.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  minutes: PropTypes.string,
  seconds: PropTypes.string,
  isDone: PropTypes.bool,
  createdTime: PropTypes.number,
  onEditTask: PropTypes.func,
  onDeleteTask: PropTypes.func,
  onToggleDone: PropTypes.func,
};

export default Task;
