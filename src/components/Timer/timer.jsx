import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './timer.css';

function Timer({ isDone, minutes, seconds, updateTimerData }) {
  const [min, setMin] = useState(minutes);
  const [sec, setSec] = useState(seconds);
  const [timer, setTimer] = useState(null);
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    let newTimer = null;

    if (!isStarted || isDone) {
      clearInterval(timer);
      setIsStarted(false);
    }
    if (isStarted && !isDone) {
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
          clearInterval(timer);
          setIsStarted(false);
        }
        updateTimerData(String(minutesLeft), String(secondsLeft));
        setMin(minutesLeft);
        setSec(secondsLeft);
      }, 1000);

      setTimer(newTimer);
    }
    return () => {
      clearInterval(newTimer);
    };
  }, [isStarted, isDone]);

  const classNamePlay = classNames('icon', 'icon-play', {
    hidden: isStarted,
  });
  const classNamePause = classNames('icon', 'icon-pause', {
    hidden: !isStarted,
  });

  return (
    <span className="description">
      {/* eslint-disable-next-line */}
        <button type="button" className={classNamePlay} onClick={() => setIsStarted(true)} />
      {/* eslint-disable-next-line */}
        <button type="button" className={classNamePause} onClick={() => setIsStarted(false)} />
      {min}:{sec}
    </span>
  );
}

Timer.defaultProps = {
  isDone: false,
  minutes: '',
  seconds: '',
  updateTimerData: () => {},
};

Timer.propTypes = {
  isDone: PropTypes.bool,
  minutes: PropTypes.string,
  seconds: PropTypes.string,
  updateTimerData: PropTypes.func,
};

export default Timer;
