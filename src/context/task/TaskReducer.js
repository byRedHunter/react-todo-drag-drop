import {
	ADD_TASK_TO_LIST,
	DELETE_TASK_TO_LIST,
	REORDER_TASK_LIST,
} from '../../types'

export const TaskReducer = (state, action) => {
	switch (action.type) {
		case ADD_TASK_TO_LIST:
			return {
				...state,
				taskList: [action.payload, ...state.taskList],
			}

		case DELETE_TASK_TO_LIST:
			const restTasks = state.taskList.filter(
				(task) => task.id !== action.payload
			)

			localStorage.setItem('taskList', JSON.stringify([...restTasks]))

			return {
				...state,
				taskList: restTasks,
			}

		case REORDER_TASK_LIST:
			const result = [...state.taskList]
			const [removed] = result.splice(action.payload.startIndex, 1)
			result.splice(action.payload.endIndex, 0, removed)

			localStorage.setItem('taskList', JSON.stringify([...result]))

			return {
				...state,
				taskList: result,
			}

		default:
			return state
	}
}
