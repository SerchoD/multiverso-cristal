import React, { useState } from 'react';
import useStyles from './useStyles';
import { PATHS } from '../../constants/paths';
import { useLocation, useNavigate } from 'react-router-dom';
import Text from '../Text/Text';

const TOPBAR_ELEMENT = [
	// { text: 'Home', route: PATHS.BASE_URL },
	{ text: 'Gemoterapia', route: PATHS.GEMSTONE_THERAPY },
	{ text: 'Cirugía Astral', route: PATHS.ASTRAL_SURGERY },
];

const Topbar = () => {
	const navigate = useNavigate();
	const { pathname: currentRoute } = useLocation();

	const s = useStyles({ currentRoute });

	const handleRouteClick = ({ route }) => {
		navigate(route);
	};
	return (
		<div className={s?.main_container}>
			{TOPBAR_ELEMENT.map((item, index) => {
				let isActive = false;
				if (item.route === currentRoute) isActive = true;

				return (
					<div
						key={index}
						className={`${s?.element_container} ${isActive && s?.active_route}`}
						onClick={() => handleRouteClick({ route: item.route })}
					>
						<Text text={item.text} textType={2} />
						{index !== TOPBAR_ELEMENT.length - 1 && (
							<div className='w-[20px] '>{/* Separator */}</div>
						)}
					</div>
				);
			})}
		</div>
	);
};

export default Topbar;
