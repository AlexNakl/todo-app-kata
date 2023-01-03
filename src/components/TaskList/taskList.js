import React, { Component } from 'react';
import Task from '../Task';
import './taskList.css';

export default class TaskList extends Component {
	
	render () {
		const { todos, onEditTask, onDeleteTask, onTaskDone } = this.props;

		const elems = todos.map( (item) => {
			const {label, id, isDone, ...itemProps} = item;
			const taskData = {label, isDone, ...itemProps};
			let liClass = '';
			if (isDone){
				liClass = 'completed';
			}
			return (
				<li key={id} 
					 className={liClass}>
					<Task {...taskData}
					onEditTask={() => onEditTask(id)}
					onDeleteTask={() => onDeleteTask(id)}
					onTaskDone={() => onTaskDone(id)}/>
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
}
