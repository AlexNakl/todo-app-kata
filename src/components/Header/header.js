import React from 'react';

import NewTaskForm from '../NewTaskForm';
import './header.css';

const Header = ({onAddTask}) => {
	return (
		<header className='header'>
        <h1>todos</h1>
        <NewTaskForm onAddTask={onAddTask}/>
      </header>
	);
};

export default Header;