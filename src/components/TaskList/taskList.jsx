import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Task from '../Task';
import './taskList.css';

function TaskList({ todos, editTask, onEditTask, onDeleteTask, onToggleDone }) {
  return (
    <ul className="todo-list">
      {todos.map((item) => {
        const { label, id, isDone, isEditable, createdTime } = item;

        const liClass = classNames({
          completed: isDone === true,
          editing: isEditable === true,
        });

        return (
          <li key={id} className={liClass}>
            {isEditable ? (
              <input type="text" className="edit" defaultValue={label} onKeyDown={(event) => editTask(id, event)} />
            ) : (
              <Task
                id={id}
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
      })}
    </ul>
  );
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
