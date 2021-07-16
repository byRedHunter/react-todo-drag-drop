import { CHANGE_DARK_MODE } from '../../types'

export const ThemeReducer = (state, action) => {
	switch (action.type) {
		case CHANGE_DARK_MODE:
			return {
				...state,
				darkMode: !state.darkMode,
			}

		default:
			return state
	}
}
