import React from 'react';
import useStyles from './useStyles';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '../../constants/paths';
import IconCrystal_1 from '../../assets/icons/IconCrystal_1';
import useMobileTopbar from '../../zustand/stores/mobileTopbar.store';

const MC_Logo = () => {
	const s = useStyles();
	const navigate = useNavigate();
	const { hideMobileTopbar } = useMobileTopbar();

	const handleNavigateHome = () => {
		navigate(PATHS?.BASE_URL?.route);
		hideMobileTopbar();
	};

	return (
		<div className={s?.logo_container} onClick={handleNavigateHome}>
			<IconCrystal_1 />
			<div className={s?.logo_text_container}>
				<h1>Multiverso</h1>
				<h1>Cristal</h1>
			</div>
		</div>
	);
};

export default MC_Logo;
