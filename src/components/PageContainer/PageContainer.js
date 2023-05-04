import React from 'react';
import useStyles from './useStyles';
import FullBackGround from '../FullBackGround/FullBackGround';
import { motion } from 'framer-motion';
import Topbar from '../../components/Topbar/Topbar';

const PageContainer = ({ children, showTopBar = true }) => {
	const s = useStyles({ showTopBar });

	return (
		<motion.div
			className={s.main_container}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, transition: { duration: 2 } }}
			exit={{ opacity: 0 }}
		>
			<FullBackGround />
			{showTopBar && <Topbar />}
			<div className={s.elements_container}>{children}</div>
		</motion.div>
	);
};

export default PageContainer;
