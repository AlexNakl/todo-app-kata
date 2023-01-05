import React from 'react';

import TaskList from '../TaskList';
import Footer from '../Footer';
import './main.css'; 

const Main = ({todos, onEditTask, onDeleteTask, 
					onToggleDone, onDeleteDoneTask, counter, 
					filterTasks, activeFilter, onChangeFilter}) => {
	return (
		<section className='main'>
			<TaskList todos={todos}
						 onEditTask={onEditTask}
						 onDeleteTask={onDeleteTask}
						 onToggleDone={onToggleDone}/>
			<Footer onDeleteDoneTask={onDeleteDoneTask}
						counter={counter}
						filterTasks={filterTasks}
						activeFilter={activeFilter}
						onChangeFilter={onChangeFilter}/>
		</section>
	);
};

export default Main;