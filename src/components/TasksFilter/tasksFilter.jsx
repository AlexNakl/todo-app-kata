import React from 'react';
import PropTypes from 'prop-types';
import './tasksFilter.css';

function TasksFilter({ activeFilter, onChangeFilter }) {
  const buttons = [
    { name: 'all', label: 'All' },
    { name: 'active', label: 'Active' },
    { name: 'completed', label: 'Completed' },
  ];

  const elems = buttons.map(({ name, label }) => {
    const isActive = activeFilter === name;
    const clazz = isActive ? 'selected' : '';

    return (
      <li key={name}>
        <button type="button" className={clazz} onClick={() => onChangeFilter(name)}>
          {label}
        </button>
      </li>
    );
  });

  return <ul className="filters">{elems}</ul>;
}

TasksFilter.defaultProps = {
  activeFilter: 'all',
  onChangeFilter: () => {},
};

TasksFilter.propTypes = {
  activeFilter: PropTypes.string,
  onChangeFilter: PropTypes.func,
};

export default TasksFilter;
