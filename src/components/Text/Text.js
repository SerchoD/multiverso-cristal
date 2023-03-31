import React from 'react';
import useStyles from './useStyles';

const Text = ({ className, text, textType, textSelectable, style }) => {
	const s = useStyles();

	return (
		<div
			className={`${className} ${s[textType]} ${
				textSelectable ? 'select-text' : 'select-none'
			} `}
			style={style}
		>
			{text}
		</div>
	);
};

export default Text;
