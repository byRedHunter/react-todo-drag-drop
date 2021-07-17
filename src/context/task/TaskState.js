import { useReducer } from 'react'
import { ADD_TASK_TO_LIST } from '../../types'
import { TaskContext } from './TaskContext'
import { TaskReducer } from './TaskReducer'
import uniqid from 'uniqid'

export const TaskState = ({ children }) => {
	const initialState = {
		taskList: localStorage.getItem('taskList') || [],
	}

	// crear el dispath y el state
	const [state, dispatch] = useReducer(TaskReducer, initialState)

	// metodos

	// añadir una tarea a la lista de tareas
	const addTaskToList = (task) => {
		const taskObjet = {
			id: uniqid('task-'),
			name: task,
			state: 'new',
		}

		dispatch({
			type: ADD_TASK_TO_LIST,
			payload: taskObjet,
		})

		localStorage.setItem('taskList', state.taskList)
	}

	return (
		<TaskContext.Provider value={{ taskList: state.taskList, addTaskToList }}>
			{children}
		</TaskContext.Provider>
	)
}