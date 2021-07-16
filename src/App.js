import React from 'react'
import Header from './components/Header'
import ListTasks from './components/ListTasks'
import { ThemeState } from './context/theme/ThemeState'
import { TaskState } from './context/task/TaskState'

const App = () => {
	return (
		<ThemeState>
			<TaskState>
				<Header />

				<ListTasks />
			</TaskState>
		</ThemeState>
	)
}

export default App
