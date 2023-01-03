const editTask = (id) => { 
	console.log("onEditTask", id); 
}

const deleteTask = (todoApp, id) => {
	todoApp.setState(({ todoData }) => {
		const newArray = todoData.filter((task) => task.id !== id);
 
		return {
			todoData: newArray,
		};
	});
};

const taskDone = (todoApp, id) => {
	todoApp.setState(({ todoData }) => {
		const newArray = [...todoData];
		
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

/*state = {
	todoData: [
		{ label: 'Completed task', liClass: 'completed', createdTime: formatDistanceToNow(Date.now()), id: uuidv4()},
		{ label: 'Editing task', liClass: 'editing', createdTime: formatDistanceToNow(Date.now()), id: uuidv4()},
		{ label: 'Active task', liClass: null, createdTime: formatDistanceToNow(Date.now()), id: uuidv4()},
	]
};*/

export {
	editTask, deleteTask, taskDone
};