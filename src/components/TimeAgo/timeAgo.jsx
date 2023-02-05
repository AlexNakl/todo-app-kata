import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import './timeAgo.css';

function TimeAgo({ createdTime }) {
  const [time, setTime] = useState(
    formatDistanceToNow(createdTime, {
      includeSeconds: true,
    })
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(
        formatDistanceToNow(createdTime, {
          includeSeconds: true,
        })
      );
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return <span className="created">{time} ago</span>;
}

TimeAgo.defaultProps = {
  createdTime: Date.now(),
};

TimeAgo.propTypes = {
  createdTime: PropTypes.number,
};

export default TimeAgo;
