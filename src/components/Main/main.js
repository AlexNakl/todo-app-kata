import React from 'react';

import TaskList from '../TaskList/taskList';
import Footer from '../Footer/footer';
import './main.css'; 

const Main = ({todos}) => {
	return (
		<section className='main'>
			<TaskList todos={todos}/>
			<Footer />
		</section>
	);
};

export default Main;