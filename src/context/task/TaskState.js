import { useReducer } from 'react'
import {
	ADD_TASK_TO_LIST,
	CHANGE_TASK_STATE,
	DELETE_COMPLETED_TASKS,
	DELETE_TASK_TO_LIST,
	REORDER_TASK_LIST,
} from '../../types'
import { TaskContext } from './TaskContext'
import { TaskReducer } from './TaskReducer'
import uniqid from 'uniqid'

export const TaskState = ({ children }) => {
	const initialState = {
		taskList: JSON.parse(localStorage.getItem('taskList')) || [],
	}

	// crear el dispath y el state
	const [state, dispatch] = useReducer(TaskReducer, initialState)

	// metodos

	// añadir una tarea a la lista de tareas
	const addTaskToList = (task) => {
		const taskObjet = {
			id: uniqid('task-'),
			name: task,
			active: true,
		}

		localStorage.setItem(
			'taskList',
			JSON.stringify([taskObjet, ...state.taskList])
		)

		dispatch({
			type: ADD_TASK_TO_LIST,
			payload: taskObjet,
		})
	}

	// delete task
	const deleteTaskToList = (idTask) => {
		dispatch({
			type: DELETE_TASK_TO_LIST,
			payload: idTask,
		})
	}

	// reorder tasks
	const reorderTasks = (startIndex, endIndex) => {
		dispatch({
			type: REORDER_TASK_LIST,
			payload: { startIndex, endIndex },
		})
	}

	// change task state
	const changeTaskState = (task) => {
		dispatch({
			type: CHANGE_TASK_STATE,
			payload: task,
		})
	}

	// deleted completed tasks
	const deletedCompletedTask = () => {
		dispatch({
			type: DELETE_COMPLETED_TASKS,
		})
	}

	return (
		<TaskContext.Provider
			value={{
				taskList: state.taskList,
				addTaskToList,
				deleteTaskToList,
				reorderTasks,
				changeTaskState,
				deletedCompletedTask,
			}}
		>
			{children}
		</TaskContext.Provider>
	)
}
