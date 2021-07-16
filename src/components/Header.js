import React, { useContext } from 'react'
import { ThemeContext } from '../context/theme/ThemeContext'

import Sun from './icons/Sun'
import Moon from './icons/Moon'

const Header = () => {
	const stateTheme = useContext(ThemeContext)
	const { darkMode, changeDarkMode } = stateTheme

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

				<form className='header-action' autoComplete='off'>
					<div className='header-action-input'>
						<div className='icon'></div>
						<input
							type='text'
							className='input'
							placeholder='Write task here'
						/>
					</div>
				</form>
			</div>
		</header>
	)
}

export default Header
