import React from 'react';
import useStyles from './useStyles';
import Text from '../Text/Text';

const Button = ({ text, onClick, btnType, textType }) => {
	const s = useStyles();

	return (
		<button onClick={onClick} className={s[btnType]}>
			<Text
				text={text}
				textType={textType | 1}
				className={'text-black whitespace-nowrap'}
			/>
		</button>
	);
};

export default Button;
