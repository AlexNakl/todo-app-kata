import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Task from '../Task';
import './taskList.css';

function TaskList({
  todos,
  editTask,
  onEditTask,
  onDeleteTask,
  onToggleDone,
  activeFilter,
  onTimerIsStarted,
  onTimerIsStoped,
  updateTimerID,
}) {
  return (
    <ul className="todo-list">
      {todos.map((item) => {
        const { label, id, isDone, isEditable, createdTime, minutes, seconds, timerIsStarted, timerID } = item;

        let taskHidden = false;

        if (activeFilter === 'all') {
          taskHidden = false;
        }
        if ((activeFilter === 'active' && isDone) || (activeFilter === 'completed' && !isDone)) {
          taskHidden = true;
        }

        const liClass = classNames({
          completed: isDone,
          editing: isEditable,
          hidden: taskHidden,
        });

        return (
          <li key={id} className={liClass}>
            {isEditable ? (
              <input type="text" className="edit" defaultValue={label} onKeyDown={(event) => editTask(id, event)} />
            ) : null}
            <Task
              id={id}
              label={label}
              minutes={minutes}
              seconds={seconds}
              isDone={isDone}
              createdTime={createdTime}
              onEditTask={() => onEditTask(id)}
              onDeleteTask={() => onDeleteTask(id)}
              onToggleDone={() => onToggleDone(id)}
              timerIsStarted={timerIsStarted}
              timerId={timerID}
              onTimerIsStarted={() => onTimerIsStarted(id)}
              onTimerIsStoped={() => onTimerIsStoped(id)}
              updateTimerID={(timerId) => updateTimerID(id, timerId)}
            />
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
  activeFilter: 'all',
  onTimerIsStarted: () => {},
  onTimerIsStoped: () => {},
  updateTimerID: () => {},
};

TaskList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)),
  editTask: PropTypes.func,
  onEditTask: PropTypes.func,
  onDeleteTask: PropTypes.func,
  onToggleDone: PropTypes.func,
  activeFilter: PropTypes.string,
  onTimerIsStarted: PropTypes.func,
  onTimerIsStoped: PropTypes.func,
  updateTimerID: PropTypes.func,
};

export default TaskList;
