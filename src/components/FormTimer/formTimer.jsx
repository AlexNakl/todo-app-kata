import React from 'react';
import PropTypes from 'prop-types';
import './formTimer.css';

function FormTimer({ minutes, seconds, onMinChange, onSecChange }) {
  return (
    <>
      <input
        type="number"
        className="new-todo-form__timer"
        placeholder="Min"
        value={minutes}
        onChange={onMinChange}
        min={0}
        max={59}
      />
      <input
        type="number"
        className="new-todo-form__timer"
        placeholder="Sec"
        value={seconds}
        onChange={onSecChange}
        min={0}
        max={59}
      />
    </>
  );
}

FormTimer.defaultProps = {
  minutes: '',
  seconds: '',
  onMinChange: () => {},
  onSecChange: () => {},
};

FormTimer.propTypes = {
  minutes: PropTypes.string,
  seconds: PropTypes.string,
  onMinChange: PropTypes.func,
  onSecChange: PropTypes.func,
};

export default FormTimer;
