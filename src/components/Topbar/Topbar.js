import React, { useEffect, useState } from 'react';
import useStyles from './useStyles';
import { NAVIGATION_ELEMENTS, PATHS } from '../../constants/paths';
import { useLocation, useNavigate } from 'react-router-dom';
import Text from '../Text/Text';
import './Topbar.css';
import useViewport from '../../hooks/useViewport';
import IconBurger from '../../assets/icons/IconBurger';
import MobileTopbarMenu from './MobileTopbarMenu/MobileTopbarMenu';
import useMobileTopbar from '../../zustand/stores/mobileTopbar.store';
import MCLogo from '../MCLogo/MCLogo';

const Topbar = () => {
	const navigate = useNavigate();
	const { showMobileTopbar } = useMobileTopbar();
	const { pathname: currentRoute } = useLocation();
	const [currentPageName, setCurrentPageName] = useState('');
	const [indicatorPosition, setIndicatorPosition] = useState({});
	const { isMobile, isDesktop } = useViewport();

	const s = useStyles({ currentRoute });

	const handleRouteClick = (item, element) => {
		const itemData = element.getBoundingClientRect();
		navigate(item?.route?.route);

		setIndicatorPosition({
			width: `${itemData.width - 10}px`,
			left: `${itemData.left + 5}px`,
		});
	};

	useEffect(() => {
		const allItems = document.querySelector('.topbar-menu');

		const currentItemName = Object.values(PATHS).find(
			(element) => element.route === currentRoute
		)?.name;

		setCurrentPageName(currentItemName);

		const currentItem = Array?.from(allItems?.childNodes)?.find(
			(e) => e?.textContent === currentItemName
		);

		const itemData = currentItem?.getBoundingClientRect();

		if (allItems) {
			setIndicatorPosition({
				width: `${itemData?.width - 10}px`,
				left: `${itemData?.left + 5}px`,
			});
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handleShowMobileMenu = () => {
		showMobileTopbar();
	};

	return (
		<div className={s?.main_container}>
			<div className={s?.desktop_topbar}>
				{isDesktop && (
					<div className='absolute left-0 -top-0 flex ml-2'>
						<MCLogo />
					</div>
				)}

				<ul className='topbar-menu'>
					{NAVIGATION_ELEMENTS.map((item) => {
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

			<div className={s?.mobile_topbar}>
				<div className={s?.icon_burger} onClick={handleShowMobileMenu}>
					<IconBurger />
				</div>
				<div className={s?.center_text_container}>
					{/* <h1>{currentPageName}</h1> */}

					<Text text={currentPageName} textType={2} className={s?.center_text} />
				</div>
				{isMobile && <MobileTopbarMenu />}
			</div>
		</div>
	);
};

export default Topbar;
