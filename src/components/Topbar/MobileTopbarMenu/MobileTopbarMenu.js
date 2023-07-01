import React from 'react';
import useStyles from './useStyles';
import useMobileTopbar from '../../../zustand/stores/mobileTopbar.store';
import IconArrow1 from '../../../assets/icons/IconArrow1';
import IconInstagram from '../../../assets/icons/IconInstagram';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { NAVIGATION_ELEMENTS, PATHS } from '../../../constants/paths';
import { useEffect } from 'react';
import Text from '../../Text/Text';
import MobileTopbarMenuNavElements from './MobileTopbarMenuNavElements/MobileTopbarMenuNavElements';

const MobileTopbarMenu = () => {
	const s = useStyles();
	const { isMobileTopbarVisible, hideMobileTopbar } = useMobileTopbar();
	const { pathname: currentRoute } = useLocation();
	const [currentPageName, setCurrentPageName] = useState('');

	useEffect(() => {
		const currentItemName = Object.values(PATHS).find(
			(element) => element.route === currentRoute
		)?.name;

		setCurrentPageName(currentItemName);

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div
			className={`${s?.main_container} ${
				isMobileTopbarVisible ? 'mobileMenu-in' : 'mobileMenu-out'
			} `}
		>
			<div className={s?.menu_board}>
				<div className={s?.topbar_container}>
					<div className='h-fit w-fit p-3 cursor-pointer' onClick={hideMobileTopbar}>
						<IconArrow1 />
					</div>
					<div className='w-[70%] flex justify-center'>
						{/* <h1 className='self-center pl-[15%] '>{currentPageName}</h1> */}
						<Text text={currentPageName} textType={2} className={s?.center_text} />
					</div>
				</div>
				<div className={s?.body_container}>
					<div className='mt-10 w-full'>
						<MobileTopbarMenuNavElements elements={NAVIGATION_ELEMENTS} />
					</div>
				</div>

				<footer className={s?.footer_container}>
					<a
						className='h-full w-fit flex flex-col justify-center px-2'
						href='https://www.instagram.com/multiverso.cristal/'
						target='_blank'
						rel='noreferrer'
					>
						<IconInstagram />
					</a>
				</footer>
			</div>

			<div className={s?.outside_area} onClick={hideMobileTopbar}>
				{/* Outside Area */}
			</div>
		</div>
	);
};

export default MobileTopbarMenu;
