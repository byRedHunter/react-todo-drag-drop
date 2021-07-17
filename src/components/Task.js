import React, { useContext } from 'react'

import Cross from './icons/Cross'
import Check from './icons/Check'
import { TaskContext } from '../context/task/TaskContext'

const Task = ({ draggableProided, task }) => {
	const stateTask = useContext(TaskContext)
	const { deleteTaskToList } = stateTask

	return (
		<li
			{...draggableProided.draggableProps}
			ref={draggableProided.innerRef}
			{...draggableProided.dragHandleProps}
			className={`task flex-between ${task.state}`}
		>
			<div className='icon pointer'>
				{task.state === 'completed' && <Check />}
			</div>
			{task.name}
			<div className='pointer' onClick={() => deleteTaskToList(task.id)}>
				<Cross />
			</div>
		</li>
	)
}

export default Task
