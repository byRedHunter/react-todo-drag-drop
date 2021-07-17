import React, { useContext } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { TaskContext } from '../context/task/TaskContext'

import Task from './Task'
import TaskFooter from './TaskFooter'

const ListTasks = () => {
	const stateTasks = useContext(TaskContext)
	const { taskList, reorderTasks } = stateTasks

	const changeOrder = (element) => {
		const { source, destination } = element

		if (!destination) return

		if (
			source.index === destination.index &&
			source.droppableId === destination.droppableId
		)
			return

		reorderTasks(source.index, destination.index)
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

					<TaskFooter totalTasks={taskList.length} />
				</section>
			</div>
		</DragDropContext>
	)
}

export default ListTasks
