import React from 'react';
import useStyles from './useStyles';
import Text from '../../../Text/Text';
import IconBackArrow from '../../../../assets/icons/IconBackArrow';
import { useNavigate } from 'react-router-dom';
import useMobileTopbar from '../../../../zustand/stores/mobileTopbar.store';

const MobileTopbarMenuNavElements = ({ elements }) => {
	const s = useStyles();
	const navigate = useNavigate();
	const { hideMobileTopbar } = useMobileTopbar();

	const handleClick = (element) => {
		navigate(element?.route?.route);
		hideMobileTopbar();
	};

	return (
		<div className='w-full h-fit'>
			{elements?.map((element, index) => {
				return (
					<div
						key={index}
						className={s?.element_container}
						onClick={() => handleClick(element)}
					>
						<Text text={element?.name} textType={2} className={s?.center_text} />
						<div className={s?.arrow}>
							<IconBackArrow />
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default MobileTopbarMenuNavElements;
