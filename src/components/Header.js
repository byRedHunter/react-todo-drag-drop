import React, { useContext } from 'react'
import { ThemeContext } from '../context/theme/ThemeContext'

import Sun from './icons/Sun'
import Moon from './icons/Moon'
import { TaskContext } from '../context/task/TaskContext'
import { useState } from 'react'

const Header = () => {
	const stateTheme = useContext(ThemeContext)
	const { darkMode, changeDarkMode } = stateTheme

	const stateTasks = useContext(TaskContext)
	const { addTaskToList } = stateTasks

	const [text, setText] = useState('')

	const handleSubmit = (e) => {
		e.preventDefault()

		if (text === '' || text.length < 5) return

		addTaskToList(text)
		setText('')
	}

	return (
		<header className={`header ${!darkMode && 'light'}`}>
			<div className='container'>
				<div className='header-head flex-between'>
					<h1 className='header-head-title'>TODO</h1>
					<div
						className='header-head-icon pointer'
						onClick={() => changeDarkMode()}
					>
						{darkMode ? <Sun /> : <Moon />}
					</div>
				</div>

				<form
					className='header-action'
					autoComplete='off'
					onSubmit={handleSubmit}
				>
					<div className='header-action-input'>
						<div className='icon'></div>
						<input
							type='text'
							className='input'
							placeholder='Write task here'
							value={text}
							onChange={({ target }) => setText(target.value)}
						/>
					</div>
				</form>
			</div>
		</header>
	)
}

export default Header
