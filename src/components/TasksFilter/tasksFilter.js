import React, { Component } from 'react';
import './tasksFilter.css';

export default class TasksFilter extends Component {

	buttons = [
		{ name: 'all', label: 'All'},
		{ name: 'active', label: 'Active'},
		{ name: 'completed', label: 'Completed'}
	]

	render() {
		const { activeFilter, onChangeFilter } = this.props;
		const elems = this.buttons.map(({name, label}) => {
			const isActive = activeFilter === name;
			const clazz = isActive ? 'selected' : '';
			return (
				<li key={name}>
					<button className={clazz}
							  onClick={() => onChangeFilter(name)}>{label}
					</button>
				</li>
			);
		});

		return (
			<ul className='filters'>
				{ elems }
			</ul>
		);
	}
}