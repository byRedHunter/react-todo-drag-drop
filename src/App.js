import React from 'react'
import Header from './components/Header'
import ListTasks from './components/ListTasks'
import { ThemeState } from './context/theme/ThemeState'

const App = () => {
	return (
		<ThemeState>
			<Header />

			<ListTasks />
		</ThemeState>
	)
}

export default App
