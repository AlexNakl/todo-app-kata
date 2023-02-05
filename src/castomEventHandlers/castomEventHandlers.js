import createTask from '../helpers';

const editTask = (setTodoData, id, event) => {
  if (event.keyCode === 13) {
    const { value } = event.target;

    setTodoData((todoData) =>
      todoData.map((task) =>
        task.id === id && task.isEditable === true ? { ...task, label: value, isEditable: false } : task
      )
    );
  }
};

const onEditTask = (setTodoData, id) => {
  setTodoData((todoData) =>
    todoData.map((task) => (task.id === id && task.isEditable !== true ? { ...task, isEditable: true } : task))
  );
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

const deleteDoneTask = (setTodoData) => {
  setTodoData((todoData) => todoData.filter((task) => !task.isDone));
};

const addTask = (setTodoData, label, minutes, seconds) => {
  setTodoData((todoData) => [...todoData, createTask(label, minutes, seconds)]);
};

const deleteTask = (setTodoData, id) => {
  setTodoData((todoData) => todoData.filter((task) => task.id !== id));
};

const onToggleDone = (setTodoData, id) => {
  setTodoData((todoData) => todoData.map((task) => (task.id === id ? { ...task, isDone: !task.isDone } : task)));
};

const updateTimerData = (setTodoData, id, minutes, seconds) => {
  setTodoData((todoData) => todoData.map((task) => (task.id === id ? { ...task, minutes, seconds } : task)));
};

export { onEditTask, editTask, deleteTask, onToggleDone, addTask, deleteDoneTask, filterTasks, updateTimerData };
