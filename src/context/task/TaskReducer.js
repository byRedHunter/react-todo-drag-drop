import {
	ADD_TASK_TO_LIST,
	CHANGE_TASK_STATE,
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

		case CHANGE_TASK_STATE:
			return {
				...state,
				taskList: state.taskList.map((task) =>
					task.id === action.payload.id
						? { ...task, active: !task.active }
						: task
				),
			}

		default:
			return state
	}
}
