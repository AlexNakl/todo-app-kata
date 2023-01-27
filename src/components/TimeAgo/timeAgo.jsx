import React, { Component } from 'react';
import PropTypes from 'prop-types';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import './timeAgo.css';

class TimeAgo extends Component {
  constructor(props) {
    super(props);

    const { createdTime } = this.props;
    this.state = {
      time: formatDistanceToNow(createdTime, {
        includeSeconds: true,
      }),
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      const { createdTime } = this.props;

      this.setState({
        time: formatDistanceToNow(createdTime, {
          includeSeconds: true,
        }),
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { time } = this.state;

    return <span className="created">{time} ago</span>;
  }
}

TimeAgo.defaultProps = {
  createdTime: Date.now(),
};

TimeAgo.propTypes = {
  createdTime: PropTypes.number,
};

export default TimeAgo;
