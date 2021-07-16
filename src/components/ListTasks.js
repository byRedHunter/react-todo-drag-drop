import React, { useState } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { reorder } from '../utils/reorder'

import Task from './Task'

const tasksList = [
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
	const [tasks, setTasks] = useState(tasksList)

	const changeOrder = (element) => {
		const { source, destination } = element

		if (!destination) return

		if (
			source.index === destination.index &&
			source.droppableId === destination.droppableId
		)
			return

		setTasks((prevTasks) => reorder(prevTasks, source.index, destination.index))
	}

	return (
		<DragDropContext
			onDragEnd={(result) => changeOrder(result)}
			direction='vertical'
		>
			<div className='container'>
				<section className='task-card'>
					<Droppable droppableId='task-list'>
						{(droppableProvided) => (
							<ul
								{...droppableProvided.droppableProps}
								ref={droppableProvided.innerRef}
								className='task-content'
							>
								{tasks.map((task, index) => (
									<Draggable key={task.id} draggableId={task.id} index={index}>
										{(draggableProided) => (
											<Task draggableProided={draggableProided} task={task} />
										)}
									</Draggable>
								))}

								{droppableProvided.placeholder}
							</ul>
						)}
					</Droppable>

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
		</DragDropContext>
	)
}

export default ListTasks
