import React from 'react'

import Cross from './icons/Cross'
import Check from './icons/Check'

const Task = ({ draggableProided, task }) => {
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
			<div className='pointer'>
				<Cross />
			</div>
		</li>
	)
}

export default Task
