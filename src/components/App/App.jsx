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
  // filterTasks,
  changeFilter,
  updateTimerData,
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
    // const todoDataForRender = activeFilter === 'all' ? todoData : filterTasks(todoData, activeFilter);

    return (
      <section className="todoapp">
        <Header onAddTask={(label, minutes, seconds) => addTask(this, label, minutes, seconds)} />
        <Main
          todos={todoData}
          editTask={(id, event) => editTask(this, id, event)}
          onEditTask={(id) => onEditTask(this, id)}
          onDeleteTask={(id) => deleteTask(this, id)}
          onToggleDone={(id) => onToggleDone(this, id)}
          onDeleteDoneTask={() => deleteDoneTask(this)}
          counter={counter}
          activeFilter={activeFilter}
          onChangeFilter={(name) => changeFilter(this, name)}
          updateTimerData={(id, minutes, seconds) => updateTimerData(this, id, minutes, seconds)}
        />
      </section>
    );
  }
}
