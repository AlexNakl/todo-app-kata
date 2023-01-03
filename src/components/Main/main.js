import React from 'react';

import TaskList from '../TaskList';
import Footer from '../Footer';
import './main.css'; 

const Main = ({todos, onEditTask, onDeleteTask, onTaskDone}) => {
	return (
		<section className='main'>
			<TaskList todos={todos}
						onEditTask={onEditTask}
						onDeleteTask={onDeleteTask}
						onTaskDone={onTaskDone}/>
			<Footer />
		</section>
	);
};

export default Main;