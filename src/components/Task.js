import React, { useContext } from 'react'

import Cross from './icons/Cross'
import Check from './icons/Check'
import { TaskContext } from '../context/task/TaskContext'

const Task = ({ draggableProided, task }) => {
	const stateTask = useContext(TaskContext)
	const { deleteTaskToList, changeTaskState } = stateTask

	return (
		<li
			{...draggableProided.draggableProps}
			ref={draggableProided.innerRef}
			{...draggableProided.dragHandleProps}
			className={`task flex-between ${!task.active && 'completed'}`}
		>
			<div className='icon pointer' onClick={() => changeTaskState(task)}>
				{!task.active && <Check />}
			</div>
			{task.name}
			<div className='pointer' onClick={() => deleteTaskToList(task.id)}>
				<Cross />
			</div>
		</li>
	)
}

export default Task
