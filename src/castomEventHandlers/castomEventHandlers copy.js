import createTask from '../helpers';

const editTask = (todoData, setTodoData, id, event) => {
  if (event.keyCode === 13) {
    const { value } = event.target;

    const newArray = todoData.map((task) =>
      task.id === id && task.isEditable === true ? { ...task, label: value, isEditable: false } : task
    );

    setTodoData(newArray);
  }
};

const onEditTask = (todoData, setTodoData, id) => {
  const newArray = todoData.map((task) =>
    task.id === id && task.isEditable !== true ? { ...task, isEditable: true } : task
  );

  setTodoData(newArray);
};

const changeFilter = (setActiveFilter, activeFilterName) => {
  setActiveFilter(activeFilterName);
};

const filterTasks = (items, filter) => {
  switch (filter) {
    case 'all':
      return items;
    case 'active':
      return items.filter((item) => !item.isDone);
    case 'completed':
      return items.filter((item) => item.isDone);
    default:
      return items;
  }
};

const deleteDoneTask = (todoData, setTodoData) => {
  const newArray = todoData.filter((task) => !task.isDone);

  setTodoData(newArray);
};

const addTask = (todoData, setTodoData, label, minutes, seconds) => {
  setTodoData([...todoData, createTask(label, minutes, seconds)]);
};

const deleteTask = (todoData, setTodoData, id) => {
  const newArray = todoData.filter((task) => task.id !== id);

  setTodoData(newArray);
};

const onToggleDone = (todoData, setTodoData, id) => {
  const newArray = todoData.map((task) => (task.id === id ? { ...task, isDone: !task.isDone } : task));

  setTodoData(newArray);
};

const updateTimerData = (todoData, setTodoData, id, minutes, seconds) => {
  const newArray = todoData.map((task) => (task.id === id ? { ...task, minutes, seconds } : task));

  setTodoData(newArray);
};

export {
  onEditTask,
  editTask,
  deleteTask,
  onToggleDone,
  addTask,
  deleteDoneTask,
  filterTasks,
  changeFilter,
  updateTimerData,
};
