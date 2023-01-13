import React from 'react';
import PropTypes from 'prop-types';

import TimeAgo from '../TimeAgo';
import './task.css';

function Task({ id, label, isDone, createdTime, onEditTask, onDeleteTask, onToggleDone }) {
  return (
    <div className="view">
      <input id={id} className="toggle" type="checkbox" onChange={onToggleDone} checked={isDone} />
      <label htmlFor={id}>
        <span className="description">{label}</span>
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
  isDone: false,
  createdTime: Date.now(),
  onEditTask: () => {},
  onDeleteTask: () => {},
  onToggleDone: () => {},
};

Task.propTypes = {
  label: PropTypes.string,
  isDone: PropTypes.bool,
  createdTime: PropTypes.number,
  onEditTask: PropTypes.func,
  onDeleteTask: PropTypes.func,
  onToggleDone: PropTypes.func,
};

export default Task;
