import * as React from 'react'

function SvgComponent(props) {
	return (
		<svg xmlns='http://www.w3.org/2000/svg' width={18} height={18} {...props}>
			<path
				fill='#6a41bb'
				fillRule='evenodd'
				d='M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z'
			/>
		</svg>
	)
}

export default SvgComponent
