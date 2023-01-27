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
      minutesLeft: minutes,
      secondsLeft: seconds,
    };
  }

  componentWillUnmount() {
    const { timer } = this.state;

    clearInterval(timer);
  }

  startTimer = () => {
    const { timer, secondsLeft, minutesLeft } = this.state;

    clearInterval(timer);

    this.setState({ isStarted: true });
    let seconds = secondsLeft;
    let minutes = minutesLeft;

    const newTimer = setInterval(() => {
      if (seconds !== '00') {
        seconds -= 1;
        if (seconds < 10) {
          seconds = `0${seconds}`;
        }
      } else if (minutes !== '00' && seconds === '00') {
        minutes -= 1;
        seconds = 59;
        if (minutes < 10) {
          minutes = `0${minutes}`;
        }
      } else if (minutes === '00' && seconds === '00') {
        clearInterval(timer);
        this.setState({ isStarted: false });
      }

      this.setState({ secondsLeft: seconds, minutesLeft: minutes });
    }, 1000);

    return this.setState({ timer: newTimer });
  };

  pauseTimer = () => {
    const { timer } = this.state;

    this.setState({ isStarted: false });

    clearInterval(timer);
  };

  render() {
    const { minutesLeft, secondsLeft, isStarted } = this.state;

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
        {minutesLeft}:{secondsLeft}
      </span>
    );
  }
}

Timer.defaultProps = {
  minutes: '',
  seconds: '',
};

Timer.propTypes = {
  minutes: PropTypes.string,
  seconds: PropTypes.string,
};
