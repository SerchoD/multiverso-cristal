import React from 'react';
import useStyles from './useStyles';
import FullBackGround from '../FullBackGround/FullBackGround';

const PageContainer = ({ children }) => {
	const s = useStyles();

	return (
		<div className={s.main_container}>
			<FullBackGround />
			<div className={s.elements_container}>{children}</div>
		</div>
	);
};

export default PageContainer;
