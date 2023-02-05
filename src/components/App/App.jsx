import React, { useState, useMemo } from 'react';

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
  updateTimerData,
} from '../../castomEventHandlers';
import createTask from '../../helpers';

function App() {
  const initialTodoData = useMemo(
    () => [createTask('Completed task'), createTask('Editing task'), createTask('Active task')],
    []
  );

  const [todoData, setTodoData] = useState(initialTodoData);
  const [activeFilter, setActiveFilter] = useState('all');
  const counter = todoData.filter((task) => !task.isDone).length;

  return (
    <section className="todoapp">
      <Header onAddTask={(label, minutes, seconds) => addTask(setTodoData, label, minutes, seconds)} />
      <Main
        todos={todoData}
        editTask={(id, event) => editTask(setTodoData, id, event)}
        onEditTask={(id) => onEditTask(setTodoData, id)}
        onDeleteTask={(id) => deleteTask(setTodoData, id)}
        onToggleDone={(id) => onToggleDone(setTodoData, id)}
        onDeleteDoneTask={() => deleteDoneTask(setTodoData)}
        counter={counter}
        activeFilter={activeFilter}
        onChangeFilter={(name) => setActiveFilter(name)}
        updateTimerData={(id, minutes, seconds) => updateTimerData(setTodoData, id, minutes, seconds)}
      />
    </section>
  );
}

export default App;
