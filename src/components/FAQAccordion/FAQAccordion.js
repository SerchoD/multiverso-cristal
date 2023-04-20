import React, { useState } from 'react';
import AccordionItem from '../AccordionItem/AccordionItem';

const FaQAccordion = ({ FAQ }) => {
	const [itemToShow, setItemToShow] = useState(false);

	const handleItemClick = ({ itemIndex }) => {
		if (itemToShow === itemIndex) {
			setItemToShow(false);
		} else {
			setItemToShow(itemIndex);
		}
	};

	return (
		<div className='flex flex-col justify-center items-center'>
			{FAQ.map((e, index) => (
				<div
					key={index}
					onClick={() => handleItemClick({ itemIndex: index })}
					className='flex justify-center w-[75%]'
				>
					<AccordionItem
						question={e.question}
						answer={e.answer}
						showItem={itemToShow === index ? true : false}
						className={`${index === 0 && 'rounded-t-xl'} ${
							index === FAQ.length - 1 && 'rounded-b-xl'
						}`}
					/>
				</div>
			))}
		</div>
	);
};

export default FaQAccordion;
