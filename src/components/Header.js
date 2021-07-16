import React from 'react'

import Sun from './icons/Sun'

const Header = () => {
	return (
		<header className='header'>
			<div className='container'>
				<div className='header-head flex-between'>
					<h1 className='header-head-title'>TODO</h1>
					<div className='header-head-icon pointer'>
						<Sun />
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
