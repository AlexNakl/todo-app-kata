import React, { Component } from 'react';

import Header from '../Header';
import Main from '../Main';
import './App.css';
import {
  onEditTask,
  editTask,
  deleteTask,
  onToggleDone,
  addTask,
  deleteDoneTask,
  filterTasks,
  changeFilter,
} from '../../castomEventHandlers';
import createTask from '../../helpers';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      todoData: [createTask('Completed task'), createTask('Editing task'), createTask('Active task')],
      activeFilter: 'all',
    };
  }

  render() {
    const { todoData, activeFilter } = this.state;
    const counter = todoData.filter((task) => !task.isDone).length;
    const todoDataForRender = activeFilter === 'all' ? todoData : filterTasks(todoData, activeFilter);

    return (
      <section className="todoapp">
        <Header onAddTask={(event) => addTask(this, event)} />
        <Main
          todos={todoDataForRender}
          editTask={(id, event) => editTask(this, id, event)}
          onEditTask={(id) => onEditTask(this, id)}
          onDeleteTask={(id) => deleteTask(this, id)}
          onToggleDone={(id) => onToggleDone(this, id)}
          onDeleteDoneTask={() => deleteDoneTask(this)}
          counter={counter}
          activeFilter={activeFilter}
          onChangeFilter={(name) => changeFilter(this, name)}
        />
      </section>
    );
  }
}
