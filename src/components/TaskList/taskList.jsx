import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Task from '../Task';
import './taskList.css';

export default class TaskList extends Component {
	static defaultProps = {
		todos: [], 
		editTask: () => {}, 
		onEditTask: () => {}, 
		onDeleteTask: () => {}, 
		onToggleDone: () => {},
	};
	
	static propTypes = {
		todos: PropTypes.arrayOf(PropTypes.object), 
		editTask: PropTypes.func,
		onEditTask: PropTypes.func, 
		onDeleteTask: PropTypes.func, 
		onToggleDone: PropTypes.func,
	};

	render () {
		const { todos, editTask, onEditTask, onDeleteTask, onToggleDone } = this.props;

		const elems = todos.map( (item) => {
			const {label, id, isDone, isEditable, createdTime} = item;
			const taskData = {label, isDone, createdTime};

			let liClass = '';

			if (isDone){
				liClass = 'completed';
			}

			if (isEditable){
				liClass = 'editing';
			}

			return (
				<li key={id} 
					 className={liClass}>
					
					{isEditable ? <input type='text' 
												className='edit' 
												defaultValue={label}
												onKeyDown={(event) => editTask(id, event)}/>
									: 
										<Task {...taskData}
											onEditTask={() => onEditTask(id)}
											onDeleteTask={() => onDeleteTask(id)}
											onToggleDone={() => onToggleDone(id)}/>
					}
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
