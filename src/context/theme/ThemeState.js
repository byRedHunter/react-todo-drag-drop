import { useReducer } from 'react'
import { CHANGE_DARK_MODE } from '../../types'
import { darkTheme, lightTheme } from '../../utils/color'
import { ThemeContext } from './ThemeContext'
import { ThemeReducer } from './ThemeReducer'

export const ThemeState = ({ children }) => {
	const initialState = {
		darkMode: true,
	}

	// crear el dispath y el state
	const [state, dispatch] = useReducer(ThemeReducer, initialState)

	// metodos

	// cambiar el valor de darkMode
	const changeDarkMode = () => {
		const theme = state.darkMode ? lightTheme : darkTheme
		const styles = document.documentElement.style
		const customStyles = Object.keys(theme)
		dispatch({ type: CHANGE_DARK_MODE })

		for (const style of customStyles) {
			styles.setProperty(style, theme[style])
		}
	}

	return (
		<ThemeContext.Provider value={{ darkMode: state.darkMode, changeDarkMode }}>
			{children}
		</ThemeContext.Provider>
	)
}
