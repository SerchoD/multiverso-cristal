import React from 'react';
import useStyles from './useStyles';
import useMobileTopbar from '../../../zustand/stores/mobileTopbar.store';
import IconBackArrow from '../../../assets/icons/IconBackArrow';

const MobileTopbarMenu = () => {
	const s = useStyles();
	const { isMobileTopbarVisible, hideMobileTopbar } = useMobileTopbar();
	return (
		<div
			className={`${s?.main_container} ${
				isMobileTopbarVisible ? 'mobileMenu-in' : 'mobileMenu-out'
			}`}
		>
			<div className={s?.menu_board}>
				<div className='h-fit w-fit p-3' onClick={hideMobileTopbar}>
					<IconBackArrow />
				</div>
				<h1 className='text-black'>Este es el menú que se va a ver en mobile</h1>
			</div>
		</div>
	);
};

export default MobileTopbarMenu;
