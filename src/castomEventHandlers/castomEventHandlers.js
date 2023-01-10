import createTask from '../helpers';

const editTask = (todoApp, id, event) => {
  if (event.keyCode === 13) {
    const { value } = event.target;
    todoApp.setState(({ todoData }) => {
      const newArray = JSON.parse(JSON.stringify(todoData));

      newArray.forEach((task) => {
        const taska = task;
        if (task.id === id && task.isEditable === true) {
          taska.label = value;
          taska.isEditable = false;
        }
      });

      return {
        todoData: newArray,
      };
    });
  }
};

const onEditTask = (todoApp, id) => {
  todoApp.setState(({ todoData }) => {
    const newArray = JSON.parse(JSON.stringify(todoData));

    newArray.forEach((task) => {
      const taska = task;
      if (task.id === id && task.isEditable !== true) {
        taska.isEditable = true;
      }
    });

    return {
      todoData: newArray,
    };
  });
};

const changeFilter = (todoApp, activeFilterName) => {
  todoApp.setState({
    activeFilter: activeFilterName,
  });
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

const deleteDoneTask = (todoApp) => {
  todoApp.setState(({ todoData }) => {
    const newArray = todoData.filter((task) => !task.isDone);

    return {
      todoData: newArray,
    };
  });
};

const addTask = (todoApp, event) => {
  if (event.keyCode === 13) {
    const eve = event;
    const { value } = event.target;
    todoApp.setState(({ todoData }) => {
      const newArray = JSON.parse(JSON.stringify(todoData));
      newArray.push(createTask(value));
      return {
        todoData: newArray,
      };
    });
    eve.target.value = '';
  }
};

const deleteTask = (todoApp, id) => {
  todoApp.setState(({ todoData }) => {
    const newArray = todoData.filter((task) => task.id !== id);

    return {
      todoData: newArray,
    };
  });
};

const onToggleDone = (todoApp, id) => {
  todoApp.setState(({ todoData }) => {
    const newArray = JSON.parse(JSON.stringify(todoData));

    newArray.forEach((task) => {
      const taska = task;
      if (task.id === id && task.isDone !== true) {
        taska.isDone = true;
      } else if (task.id === id && task.isDone === true) {
        taska.isDone = false;
      }
    });

    return {
      todoData: newArray,
    };
  });
};

export { onEditTask, editTask, deleteTask, onToggleDone, addTask, deleteDoneTask, filterTasks, changeFilter };
