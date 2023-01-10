import React from 'react';
import PropTypes from 'prop-types';

import Task from '../Task';
import './taskList.css';

function TaskList({ todos, editTask, onEditTask, onDeleteTask, onToggleDone }) {
  const elems = todos.map((item) => {
    const { label, id, isDone, isEditable, createdTime } = item;

    let liClass = '';

    if (isDone) {
      liClass = 'completed';
    }

    if (isEditable) {
      liClass = 'editing';
    }

    return (
      <li key={id} className={liClass}>
        {isEditable ? (
          <input type="text" className="edit" defaultValue={label} onKeyDown={(event) => editTask(id, event)} />
        ) : (
          <Task
            label={label}
            isDone={isDone}
            createdTime={createdTime}
            onEditTask={() => onEditTask(id)}
            onDeleteTask={() => onDeleteTask(id)}
            onToggleDone={() => onToggleDone(id)}
          />
        )}
      </li>
    );
  });

  return <ul className="todo-list">{elems}</ul>;
}

TaskList.defaultProps = {
  todos: [],
  editTask: () => {},
  onEditTask: () => {},
  onDeleteTask: () => {},
  onToggleDone: () => {},
};

TaskList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)),
  editTask: PropTypes.func,
  onEditTask: PropTypes.func,
  onDeleteTask: PropTypes.func,
  onToggleDone: PropTypes.func,
};

export default TaskList;
