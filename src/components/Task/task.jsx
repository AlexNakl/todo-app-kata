import React from 'react';
import PropTypes from 'prop-types';

import TimeAgo from '../TimeAgo';
import Timer from '../Timer';
import './task.css';

function Task({
  id,
  label,
  minutes,
  seconds,
  isDone,
  createdTime,
  onEditTask,
  onDeleteTask,
  onToggleDone,
  timerIsStarted,
  timerID,
  onTimerIsStarted,
  onTimerIsStoped,
  updateTimerID,
}) {
  return (
    <div className="view">
      <input id={id} className="toggle" type="checkbox" onChange={onToggleDone} checked={isDone} />
      <label htmlFor={id}>
        <span className="title">{label}</span>
        <Timer
          isDone={isDone}
          minutes={minutes}
          seconds={seconds}
          timerIsStarted={timerIsStarted}
          timerId={timerID}
          onTimerIsStarted={onTimerIsStarted}
          onTimerIsStoped={onTimerIsStoped}
          updateTimerID={updateTimerID}
        />
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
  timerIsStarted: false,
  timerID: null,
  onTimerIsStarted: () => {},
  onTimerIsStoped: () => {},
  updateTimerID: () => {},
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
  timerIsStarted: PropTypes.bool,
  timerID: PropTypes.number,
  onTimerIsStarted: PropTypes.func,
  onTimerIsStoped: PropTypes.func,
  updateTimerID: PropTypes.func,
};

export default Task;
