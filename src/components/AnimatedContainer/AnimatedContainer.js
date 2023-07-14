import React, { useEffect, useRef, useState } from 'react';

import useStyles from './useStyles';
import Button from '../Button/Button';

const AnimatedContainer = ({ children, buttonName }) => {
	const accordionHeightRef = useRef(null);

	const [showAccordion, setShowAccordion] = useState(true);
	const [contentHeight, setContentHeight] = useState(null);

	const s = useStyles({ showAccordion });

	const handleShowAccordion = () => {
		if (!showAccordion) {
			setShowAccordion(true);

			if (contentHeight !== 'auto') {
				setTimeout(() => {
					setContentHeight('auto');
				}, 1000);
			}
		}
		if (showAccordion) {
			setContentHeight(accordionHeightRef?.current?.offsetHeight + 'px');
			setTimeout(() => {
				setShowAccordion(false);
			}, 1000);
		}
	};

	useEffect(() => {
		if (showAccordion && contentHeight !== 'auto') {
			setShowAccordion(false);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [contentHeight]);

	useEffect(() => {
		setContentHeight(accordionHeightRef?.current?.offsetHeight + 'px');
	}, [accordionHeightRef, showAccordion]);

	return (
		<div className={`flex flex-col items-center w-full mt-0 isDesktop:pb-10`}>
			<Button
				text={buttonName}
				textType={2}
				btnType={1}
				onClick={handleShowAccordion}
				textClassName='text-xl'
			/>
			<div
				className={`${s.main_container}`}
				style={{
					height: `${showAccordion ? contentHeight : '0px'}`,
				}}
			>
				<div
					className='h-fit w-full flex flex-col justify-start items-center'
					ref={accordionHeightRef}
				>
					<>{children}</>
				</div>
			</div>
		</div>
	);
};

export default AnimatedContainer;
