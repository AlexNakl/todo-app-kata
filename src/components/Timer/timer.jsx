import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './timer.css';

function Timer({
  isDone,
  minutes,
  seconds,
  timerIsStarted,
  timerID,
  onTimerIsStarted,
  onTimerIsStoped,
  updateTimerID,
}) {
  const [min, setMin] = useState(minutes);
  const [sec, setSec] = useState(seconds);

  useEffect(() => {
    let newTimer = null;

    if (!timerIsStarted || isDone) {
      clearInterval(timerID);
      onTimerIsStoped();
    }
    if (timerIsStarted && !isDone) {
      let minutesLeft = min;
      let secondsLeft = sec;

      newTimer = setInterval(() => {
        if (secondsLeft !== '00') {
          secondsLeft -= 1;
          if (secondsLeft < 10) {
            secondsLeft = `0${secondsLeft}`;
          }
        } else if (minutesLeft !== '00' && secondsLeft === '00') {
          minutesLeft -= 1;
          secondsLeft = 59;
          if (minutesLeft < 10) {
            minutesLeft = `0${minutesLeft}`;
          }
        } else if (minutesLeft === '00' && secondsLeft === '00') {
          clearInterval(timerID);
          onTimerIsStoped();
        }
        setMin(minutesLeft);
        setSec(secondsLeft);
      }, 1000);

      updateTimerID(newTimer);
    }
    return () => {
      clearInterval(newTimer);
    };
  }, [timerIsStarted, isDone]);

  const classNamePlay = classNames('icon', 'icon-play', {
    hidden: timerIsStarted,
  });
  const classNamePause = classNames('icon', 'icon-pause', {
    hidden: !timerIsStarted,
  });

  return (
    <span className="description">
      {/* eslint-disable-next-line */}
        <button type="button" className={classNamePlay} onClick={onTimerIsStarted} />
      {/* eslint-disable-next-line */}
        <button type="button" className={classNamePause} onClick={onTimerIsStoped} />
      {min}:{sec}
    </span>
  );
}

Timer.defaultProps = {
  isDone: false,
  minutes: '',
  seconds: '',
  timerIsStarted: false,
  timerID: null,
  updateTimerID: () => {},
};

Timer.propTypes = {
  isDone: PropTypes.bool,
  minutes: PropTypes.string,
  seconds: PropTypes.string,
  timerIsStarted: PropTypes.bool,
  timerID: PropTypes.number,
  updateTimerID: PropTypes.func,
};

export default Timer;
