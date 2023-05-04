import React, { useEffect, useRef, useState } from 'react';
import AccordionItem from '../AccordionItem/AccordionItem';
import useStyles from './useStyles';
import Button from '../Button/Button';

const FaQAccordion = ({ FAQ, className }) => {
	const accordionHeightRef = useRef(null);
	const [itemToShow, setItemToShow] = useState(false);
	const [showAccordion, setShowAccordion] = useState(false);
	const [contentHeight, setContentHeight] = useState(null);
	const s = useStyles({ showAccordion });

	const handleItemClick = ({ itemIndex }) => {
		if (itemToShow === itemIndex) {
			setItemToShow(false);
		} else {
			setItemToShow(itemIndex);
		}
	};

	const handleShowAccordion = () => {
		if (!showAccordion) {
			setShowAccordion(!showAccordion);
			if (contentHeight !== 'auto') {
				setTimeout(() => {
					setContentHeight('auto');
				}, 1000);
			}
		}
		if (showAccordion) {
			setContentHeight(accordionHeightRef?.current?.offsetHeight + 'px');
		}
	};

	useEffect(() => {
		if (showAccordion && contentHeight !== 'auto') {
			setShowAccordion(!showAccordion);
		}
	}, [contentHeight]);

	useEffect(() => {
		setContentHeight(accordionHeightRef?.current?.offsetHeight + 'px');
	}, [accordionHeightRef, showAccordion]);

	return (
		<>
			<Button
				text='Preguntas frecuentes'
				textType={1}
				btnType={1}
				onClick={handleShowAccordion}
			/>
			<div
				className={`${s.main_container} ${className} `}
				style={{
					height: `${showAccordion ? contentHeight : '0px'}`,
				}}
			>
				<div className='h-fit' ref={accordionHeightRef}>
					{FAQ.map((e, index) => (
						<div
							key={index}
							onClick={() => handleItemClick({ itemIndex: index })}
							className='flex justify-center w-[100%]'
						>
							<AccordionItem
								question={e.question}
								answer={e.answer}
								showItem={itemToShow === index}
								className={`${index === 0 && 'rounded-t-xl'} ${
									index === FAQ.length - 1 && 'rounded-b-xl'
								} `}
							/>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default FaQAccordion;
