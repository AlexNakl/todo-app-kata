import React, { Component } from 'react';

import Header from '../Header';
import Main from '../Main';
import './todoApp.css';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { v4 as uuidv4 } from 'uuid'

import {
	editTask,
	deleteTask,
	taskDone,
} from '../../castomEventHandlers';

export default class TodoApp extends Component {
	
	state = {
		todoData: [
			{ label: 'Completed task', isDone: true, createdTime: formatDistanceToNow(Date.now()), id: uuidv4()},
			{ label: 'Editing task', isDone: false, createdTime: formatDistanceToNow(Date.now()), id: uuidv4()},
			{ label: 'Active task', isDone: false, createdTime: formatDistanceToNow(Date.now()), id: uuidv4()},
		]
	};

	render () {
		const { todoData } = this.state;

		return (
			<section className='todoapp'>
				<Header />
				<Main todos={todoData}
						onEditTask={editTask}
						onDeleteTask={(id) => deleteTask(this, id)}
						onTaskDone={(id) => taskDone(this, id)}/>
			</section>
		);
	};
}