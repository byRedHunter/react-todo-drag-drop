import { useReducer } from 'react'
import { TaskContext } from './TaskContext'
import { TaskReducer } from './TaskReducer'

export const TaskState = ({ children }) => {
	const initialState = {
		darkMode: true,
	}

	// crear el dispath y el state
	const [state, dispatch] = useReducer(TaskReducer, initialState)

	// metodos

	return (
		<TaskContext.Provider value={{ taskList: state.taskList }}>
			{children}
		</TaskContext.Provider>
	)
}
