import React from 'react';

import Header from '../Header/header';
import Main from '../Main/main';
import './todoApp.css';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

const TodoApp = () => {

	const todoData = [
		{ label: 'Completed task', liClass: 'completed', createdTime: formatDistanceToNow(Date.now()), id: 1},
		{ label: 'Editing task', liClass: 'editing', createdTime: formatDistanceToNow(Date.now()), id: 2},
		{ label: 'Active task', liClass: null, createdTime: formatDistanceToNow(Date.now()), id: 3},
	];
	
	return (
		<section className='todoapp'>
			<Header />
			<Main todos={todoData}/>
		</section>
	);
};

export default TodoApp;