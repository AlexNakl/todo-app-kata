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
}) {
  return (
    <section className="main">
      <TaskList
        todos={todos}
        editTask={editTask}
        onEditTask={onEditTask}
        onDeleteTask={onDeleteTask}
        onToggleDone={onToggleDone}
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
};

export default Main;
