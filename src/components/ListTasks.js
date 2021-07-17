import React, { useContext } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { TaskContext } from '../context/task/TaskContext'
import { reorder } from '../utils/reorder'

import Task from './Task'

const ListTasks = () => {
	const stateTasks = useContext(TaskContext)
	const { taskList } = stateTasks

	const changeOrder = (element) => {
		const { source, destination } = element

		if (!destination) return

		if (
			source.index === destination.index &&
			source.droppableId === destination.droppableId
		)
			return

		reorder(taskList, source.index, destination.index)
	}

	if (taskList.length === 0)
		return (
			<div className='container'>
				<p className='text-advice'>No tienes tareas pendientes.</p>
			</div>
		)

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
								{taskList.map((task, index) => (
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
						<div className='task-info'>{taskList.length} items left</div>
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
