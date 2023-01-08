import React from 'react';
import PropTypes from 'prop-types';
import TasksFilter from '../TasksFilter';
import './footer.css';    

const Footer = ({onDeleteDoneTask, counter, 
						activeFilter, onChangeFilter}) => {
	
	return (
		<footer className='footer'>
          <span className='todo-count'>{counter} items left</span>
          <TasksFilter  activeFilter={activeFilter}
								onChangeFilter={onChangeFilter}/>
          <button type='button'
			 			className='clear-completed'
					   onClick = {onDeleteDoneTask}>Clear completed
			 </button>
        </footer>
	);
};

Footer.defaultProps = {
	counter: 0, 
	activeFilter: 'all',
	onDeleteDoneTask: () => {}, 
	onChangeFilter: () => {},
};
 
Footer.propTypes = {
	counter: PropTypes.number, 
	activeFilter: PropTypes.string, 
	onDeleteDoneTask: PropTypes.func,
	onChangeFilter: PropTypes.func,
};

export default Footer;