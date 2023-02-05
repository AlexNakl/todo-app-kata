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
  changeFilter,
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

  const onTimerIsStarted = (id) => {
    const newArray = todoData.map((task) => (task.id === id ? { ...task, timerIsStarted: true } : task));
    setTodoData(newArray);
  };

  const onTimerIsStoped = (id) => {
    const newArray = todoData.map((task) => (task.id === id ? { ...task, timerIsStarted: false } : task));
    setTodoData(newArray);
  };

  const updateTimerID = (id, timerId) => {
    const newArray = todoData.map((task) => (task.id === id ? { ...task, timerId } : task));
    setTodoData(newArray);
  };

  return (
    <section className="todoapp">
      <Header onAddTask={(label, minutes, seconds) => addTask(todoData, setTodoData, label, minutes, seconds)} />
      <Main
        todos={todoData}
        editTask={(id, event) => editTask(todoData, setTodoData, id, event)}
        onEditTask={(id) => onEditTask(todoData, setTodoData, id)}
        onDeleteTask={(id) => deleteTask(todoData, setTodoData, id)}
        onToggleDone={(id) => onToggleDone(todoData, setTodoData, id)}
        onDeleteDoneTask={() => deleteDoneTask(todoData, setTodoData)}
        counter={counter}
        activeFilter={activeFilter}
        onChangeFilter={(name) => changeFilter(setActiveFilter, name)}
        onTimerIsStarted={(id) => onTimerIsStarted(id)}
        onTimerIsStoped={(id) => onTimerIsStoped(id)}
        updateTimerID={(id, timerId) => updateTimerID(id, timerId)}
      />
    </section>
  );
}

export default App;
