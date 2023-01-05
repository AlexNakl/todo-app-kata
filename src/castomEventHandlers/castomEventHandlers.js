import {	createTask } from '../helpers';

const editTask = (id) => { 
	console.log("onEditTask", id); 
}

/*state = {
	todoData: [
		{ label: 'Completed task', liClass: 'completed', createdTime: formatDistanceToNow(Date.now()), id: uuidv4()},
		{ label: 'Editing task', liClass: 'editing', createdTime: formatDistanceToNow(Date.now()), id: uuidv4()},
		{ label: 'Active task', liClass: null, createdTime: formatDistanceToNow(Date.now()), id: uuidv4()},
	]
};*/

const changeFilter = (todoApp, activeFilterName) => {
	todoApp.setState({
		activeFilter: activeFilterName
	});
}

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
}

const deleteDoneTask = (todoApp) => {
	todoApp.setState(({ todoData }) => {
		const newArray = todoData.filter((task) => !task.isDone);

		return {
			todoData: newArray,
		};
	});
}

const addTask = (todoApp, event) => {
	if (event.keyCode === 13){
		const value = event.target.value;
		todoApp.setState(({ todoData }) => {
			const newArray = JSON.parse(JSON.stringify(todoData));
			newArray.push(createTask(value));
			return {
				todoData: newArray,
			};
		});
		event.target.value = '';
	}
}

const deleteTask = (todoApp, id) => {
	todoApp.setState(({ todoData }) => {
		const newArray = todoData.filter((task) => task.id !== id);
 
		return {
			todoData: newArray,
		};
	});
}

const onToggleDone = (todoApp, id) => {
	todoApp.setState(({ todoData }) => {
		const newArray = JSON.parse(JSON.stringify(todoData));
		
		newArray.forEach((task) => {
			if (task.id === id && task.isDone !== true){
				task.isDone = true;
			} else if (task.id === id && task.isDone === true){
				task.isDone = false;
			}
		});
 
		return {
			todoData: newArray,
		};
	});
}

export {
	editTask, deleteTask, onToggleDone, addTask, 
	deleteDoneTask, filterTasks, changeFilter
};