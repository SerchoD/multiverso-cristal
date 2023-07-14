import React from 'react';
import useStyles from './useStyles';
import Text from '../../../Text/Text';
import IconArrow1 from '../../../../assets/icons/IconArrow1';
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
							<IconArrow1 />
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default MobileTopbarMenuNavElements;
