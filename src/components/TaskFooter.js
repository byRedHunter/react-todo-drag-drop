import React, { useContext } from 'react'
import { TaskContext } from '../context/task/TaskContext'

const TaskFooter = ({ totalTasks }) => {
	const stateTask = useContext(TaskContext)
	const { deletedCompletedTask } = stateTask

	return (
		<>
			<div className='task-footer flex-between'>
				<div className='task-info'>{totalTasks} items left</div>

				<ul className='task-filter'>
					<li className='item-filter active pointer'>All</li>
					<li className='item-filter pointer'>Active</li>
					<li className='item-filter pointer'>Completed</li>
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
