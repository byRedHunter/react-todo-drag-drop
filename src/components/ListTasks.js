import React from 'react'

import Cross from './icons/Cross'

const tasks = [
	{
		id: '6sf6sd5f',
		name: 'Task One',
		state: 'active',
	},
	{
		id: '6s90srt1',
		name: 'Task Completed',
		state: 'completed',
	},
	{
		id: 'sdg3sd132g1',
		name: 'Task One',
		state: 'active',
	},
	{
		id: 'sdg65s46d',
		name: 'Task Completed',
		state: 'completed',
	},
	{
		id: 'gsgsdh',
		name: 'Task One',
		state: 'active',
	},
	{
		id: 'wetewtwe',
		name: 'Task Completed',
		state: 'completed',
	},
]

const ListTasks = () => {
	return (
		<div className='container'>
			<section className='task-card'>
				<ul className='task-content'>
					{tasks.map((task) => (
						<li key={task.id} className={`task flex-between ${task.state}`}>
							<div className='icon'></div>
							{task.name}
							<div className='pointer'>
								<Cross />
							</div>
						</li>
					))}
				</ul>

				<div className='task-footer flex-between'>
					<div className='task-info'>{tasks.length} items left</div>
					<ul className='task-filter'>
						<li className='item-filter active pointer'>All</li>
						<li className='item-filter pointer'>Active</li>
						<li className='item-filter pointer'>Completed</li>
					</ul>
					<div className='task-clear pointer'>Clear Completed</div>
				</div>

				<p className='text-info'>Drag and drop to reorder list</p>
			</section>
		</div>
	)
}

export default ListTasks
