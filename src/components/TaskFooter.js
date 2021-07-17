import React, { useContext } from 'react'
import { TaskContext } from '../context/task/TaskContext'

const filters = [
	{
		id: 'item-s8d5g8',
		item: 'All',
		filter: 'all',
	},
	{
		id: 'item-0sd574',
		item: 'Active',
		filter: 'active',
	},
	{
		id: 'item-s94852',
		item: 'Completed',
		filter: 'completed',
	},
]

const TaskFooter = ({ totalTasks }) => {
	const stateTask = useContext(TaskContext)
	const { itemFilter, deletedCompletedTask, getItemToFilter } = stateTask

	return (
		<>
			<div className='task-footer flex-between'>
				<div className='task-info'>{totalTasks} items left</div>

				<ul className='task-filter'>
					{filters.map((filter) => (
						<li
							className={`item-filter pointer ${
								filter.filter === itemFilter && 'active'
							}`}
							key={filter.id}
							onClick={() => getItemToFilter(filter.filter)}
						>
							{filter.item}
						</li>
					))}
				</ul>

				<div
					className='task-clear pointer'
					onClick={() => deletedCompletedTask()}
				>
					Clear Completed
				</div>
			</div>

			<p className='text-info'>Drag and drop to reorder list</p>
		</>
	)
}

export default TaskFooter
