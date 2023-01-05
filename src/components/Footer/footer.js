import React from 'react';

import TasksFilter from '../TasksFilter';
import './footer.css';    

const Footer = ({onDeleteDoneTask, counter, 
						filterTasks, activeFilter, onChangeFilter}) => {
	
	return (
		<footer className='footer'>
          <span className='todo-count'>{counter} items left</span>
          <TasksFilter filterTasks={filterTasks}
			 				  activeFilter={activeFilter}
								onChangeFilter={onChangeFilter}/>
          <button className='clear-completed'
					   onClick = {onDeleteDoneTask}>Clear completed
			 </button>
        </footer>
	);
};

export default Footer;