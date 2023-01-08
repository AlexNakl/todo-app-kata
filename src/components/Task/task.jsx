import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TimeAgo from '../TimeAgo';
import './task.css';

export default class Task extends Component {
	static defaultProps = {
		label: 'default task',
		isDone: false,
		createdTime: Date.now(),
		onEditTask: () => {}, 
		onDeleteTask: () => {}, 
		onToggleDone: () => {}
	};

	static propTypes = {
		label: PropTypes.string,
		isDone: PropTypes.bool,
		createdTime: PropTypes.number,
		onEditTask: PropTypes.func, 
		onDeleteTask: PropTypes.func, 
		onToggleDone: PropTypes.func
	};

	render () {
		const {label, isDone, createdTime, onEditTask, onDeleteTask, onToggleDone} = this.props;
		
		return (
			<div className='view'>
				<input className='toggle'
						 type='checkbox' 
						 onChange={onToggleDone}
						 checked={isDone}/>
				<label>
					<span className='description'>{label}</span>
					<TimeAgo createdTime={createdTime}/>
				</label>
				<button type='button'
						  className='icon icon-edit'
						  onClick={onEditTask}
				></button>
				<button type='button'
						  className='icon icon-destroy'
						  onClick={onDeleteTask}
				></button>
			</div>
		);
	};
}