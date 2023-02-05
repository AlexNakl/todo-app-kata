import React from 'react';
import PropTypes from 'prop-types';

import TaskList from '../TaskList';
import Footer from '../Footer';
import './main.css';

function Main({
  todos,
  editTask,
  onEditTask,
  onDeleteTask,
  onToggleDone,
  onDeleteDoneTask,
  counter,
  activeFilter,
  onChangeFilter,
  updateTimerData,
}) {
  return (
    <section className="main">
      <TaskList
        todos={todos}
        editTask={editTask}
        onEditTask={onEditTask}
        onDeleteTask={onDeleteTask}
        onToggleDone={onToggleDone}
        updateTimerData={updateTimerData}
        activeFilter={activeFilter}
      />
      <Footer
        onDeleteDoneTask={onDeleteDoneTask}
        counter={counter}
        activeFilter={activeFilter}
        onChangeFilter={onChangeFilter}
      />
    </section>
  );
}

Main.defaultProps = {
  todos: [],
  counter: 0,
  activeFilter: 'all',
  editTask: () => {},
  onEditTask: () => {},
  onDeleteTask: () => {},
  onToggleDone: () => {},
  onDeleteDoneTask: () => {},
  onChangeFilter: () => {},
  updateTimerData: () => {},
};

Main.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)),
  counter: PropTypes.number,
  activeFilter: PropTypes.string,
  editTask: PropTypes.func,
  onEditTask: PropTypes.func,
  onDeleteTask: PropTypes.func,
  onToggleDone: PropTypes.func,
  onDeleteDoneTask: PropTypes.func,
  onChangeFilter: PropTypes.func,
  updateTimerData: PropTypes.func,
};

export default Main;
