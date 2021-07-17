import { ADD_TASK_TO_LIST } from '../../types'

export const TaskReducer = (state, action) => {
	switch (action.type) {
		case ADD_TASK_TO_LIST:
			return {
				...state,
				taskList: [action.payload, ...state.taskList],
			}

		default:
			return state
	}
}
