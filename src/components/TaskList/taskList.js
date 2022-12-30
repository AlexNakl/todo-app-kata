import React from 'react';

import Task from '../Task/task';
import './taskList.css';

const TaskList = ({todos}) => {
	const elems = todos.map( (item) => {
		const {label, id, liClass, ...itemProps} = item;
		const taskData = {label, ...itemProps};

		return (
			<li key={id} className={liClass}>
				<Task {...taskData}/>
				{liClass === 'editing' ? <input type='text' className='edit' value={label} /> : null}
			</li>
		);
	});

	return (
		<ul className='todo-list'>
			{ elems }
      </ul>
	);
};

export default TaskList;