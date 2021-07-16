import * as React from 'react'

function SvgComponent(props) {
	return (
		<svg xmlns='http://www.w3.org/2000/svg' width={11} height={9} {...props}>
			<path
				fill='none'
				stroke='#FFF'
				strokeWidth={2}
				d='M1 4.304L3.696 7l6-6'
			/>
		</svg>
	)
}

export default SvgComponent
