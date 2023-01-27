import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './timer.css';

export default class Timer extends Component {
  constructor(props) {
    super(props);
    const { minutes, seconds } = this.props;
    this.state = {
      isStarted: false,
      timer: null,
      min: minutes,
      sec: seconds,
    };
  }

  componentDidUpdate(prevProps) {
    const { timer } = this.state;
    const { isDone } = this.props;
    if (isDone !== prevProps.isDone) {
      if (isDone) {
        clearInterval(timer);
        this.setState({ isStarted: false });
      }
    }
  }

  componentWillUnmount() {
    const { timer } = this.state;

    clearInterval(timer);
  }

  startTimer = () => {
    const { timer } = this.state;
    const { minutes, seconds, updateTimerData, isDone } = this.props;

    clearInterval(timer);
    if (!isDone) {
      this.setState({ isStarted: true });
      let minutesLeft = minutes;
      let secondsLeft = seconds;

      const newTimer = setInterval(() => {
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
          this.setState({ isStarted: false });
        }

        updateTimerData(String(minutesLeft), String(secondsLeft));
        this.setState({ min: String(minutesLeft), sec: String(secondsLeft) });
      }, 1000);

      this.setState({ timer: newTimer });
    }
  };

  pauseTimer = () => {
    const { timer } = this.state;

    this.setState({ isStarted: false });

    clearInterval(timer);
  };

  render() {
    const { isStarted, min, sec } = this.state;

    const classNamePlay = classNames('icon', 'icon-play', {
      hidden: isStarted,
    });
    const classNamePause = classNames('icon', 'icon-pause', {
      hidden: !isStarted,
    });

    return (
      <span className="description">
        {/* eslint-disable-next-line */}
        <button type="button" className={classNamePlay} onClick={this.startTimer} />
        {/* eslint-disable-next-line */}
        <button type="button" className={classNamePause} onClick={this.pauseTimer} />
        {min}:{sec}
      </span>
    );
  }
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
