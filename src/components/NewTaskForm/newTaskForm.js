import React from 'react';

import './newTaskForm.css';

const NewTaskForm = ({onAddTask}) => {
	return (
        <input
          className='new-todo'
          placeholder='What needs to be done?'
          autoFocus
			 onKeyDown={(event) => onAddTask(event)}
        />
	);
};

export default NewTaskForm;