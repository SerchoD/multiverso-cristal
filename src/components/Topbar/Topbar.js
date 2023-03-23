import React from 'react';
import useStyles from './useStyles';

const TOPBAR_ELEMENT = [
	{ text: 'Home' },
	{ text: 'About' },
	{ text: 'Contact Large' },
];

const Topbar = () => {
	const s = useStyles();

	return (
		<div className={s?.main_container}>
			{TOPBAR_ELEMENT.map((item, index) => {
				return (
					<div key={index} className={s?.element_container}>
						<div className=''>{item.text}</div>
						{index !== TOPBAR_ELEMENT.length - 1 && (
							<div className='w-20 bg-red-500'>{/* Separator */}</div>
						)}
					</div>
				);
			})}
		</div>
	);
};

export default Topbar;
