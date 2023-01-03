import React, { Component } from 'react';
import './task.css';

export default class Task extends Component {
	
	onTaskClick = (event) => {
		console.log(event);
		this.setState({
			completed: true
		});
	}
	
	render () {
		const {label, isDone, createdTime, onEditTask, onDeleteTask, onTaskDone} = this.props;
		
		return (
			<div className='view'>
				<input className='toggle'
						 type='checkbox' 
						 onChange={onTaskDone}
						 checked={isDone}/>
				<label>
					<span className='description'>{label}</span>
					<span className='created'>created {createdTime} ago</span>
				</label>
				<button className='icon icon-edit'
						  onClick={onEditTask}
				></button>
				<button className='icon icon-destroy'
						  onClick={onDeleteTask}
				></button>
			</div>
		);
	};
}