import React, { useContext, useMemo } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { TaskContext } from '../context/task/TaskContext'

import Task from './Task'
import TaskFooter from './TaskFooter'

const ListTasks = () => {
	const stateTasks = useContext(TaskContext)
	const { taskList, reorderTasks, itemFilter } = stateTasks

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

	const filteredTask = useMemo(() => {
		const filtered = []
		if (taskList.length === 0) return []
		if (itemFilter === 'all') return taskList

		taskList.forEach((taskItem) => {
			if (itemFilter === 'active' && taskItem.active) {
				filtered.push(taskItem)
			}

			if (itemFilter === 'completed' && !taskItem.active) {
				filtered.push(taskItem)
			}
		})
		return filtered
	}, [itemFilter, taskList])

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
								{filteredTask.map((task, index) => (
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

					<TaskFooter totalTasks={filteredTask.length} />
				</section>
			</div>
		</DragDropContext>
	)
}

export default ListTasks
