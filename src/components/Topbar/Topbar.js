import React, { useEffect, useState } from 'react';
import useStyles from './useStyles';
import { PATHS } from '../../constants/paths';
import { useLocation, useNavigate } from 'react-router-dom';
import Text from '../Text/Text';
import './Topbar.css';

const TOPBAR_ELEMENT = [
	// { name: 'Home', route: PATHS.BASE_URL },
	{ name: 'Gemoterapia', route: PATHS.GEMSTONE_THERAPY },
	{ name: 'Cirugía Astral', route: PATHS.ASTRAL_SURGERY },
];

const Topbar = () => {
	const navigate = useNavigate();
	const { pathname: currentRoute } = useLocation();
	const [indicatorPosition, setIndicatorPosition] = useState({});

	const s = useStyles({ currentRoute });

	const handleRouteClick = (item, element) => {
		const itemData = element.getBoundingClientRect();

		navigate(item?.route);

		setIndicatorPosition({
			width: `${itemData.width - 10}px`,
			left: `${itemData.left + 5}px`,
		});
	};

	useEffect(() => {
		const allItems = document.querySelector('.topbar-menu');

		const currentItemName = TOPBAR_ELEMENT.find(
			(element) => element.route === currentRoute
		)?.name;

		const currentItem = Array.from(allItems?.childNodes).find(
			(e) => e.textContent === currentItemName
		);

		const itemData = currentItem.getBoundingClientRect();

		if (allItems) {
			setIndicatorPosition({
				width: `${itemData.width - 10}px`,
				left: `${itemData.left + 5}px`,
			});
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className={s?.main_container}>
			<ul className='topbar-menu'>
				{TOPBAR_ELEMENT.map((item) => {
					let isActive = false;
					if (item.route === currentRoute) isActive = true;

					return (
						<div key={item.name}>
							<li
								className={`${s?.element_container} ${isActive && s?.active_route}`}
								onClick={(e) => handleRouteClick(item, e.target)}
							>
								<Text text={item.name} textType={2} className={'pb-1 px-1 -mx-3'} />
							</li>
						</div>
					);
				})}
			</ul>
			<div className='topbar-indicator' style={indicatorPosition} />
		</div>
	);
};

export default Topbar;
