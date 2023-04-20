import React from 'react';

const DownArrow = ({ style }) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 24 24'
			width='24'
			height='24'
			style={{ ...style, scale: '1.4' }}
		>
			<path d='M12 17.207l-6.646-6.647 1.414-1.414L12 14.379l5.232-5.233 1.414 1.414z' />
		</svg>
	);
};

export default DownArrow;
