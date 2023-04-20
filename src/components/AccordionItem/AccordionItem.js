import React, { useEffect, useRef, useState } from 'react';
import Text from '../Text/Text';
import DownArrow from '../../assets/icons/DownArrow';
import useStyles from './useStyles';

const AccordionItem = ({ question, answer, showItem, className }) => {
	const descriptionRef = useRef(null);
	const [descriptionHeight, setDescriptionHeight] = useState(null);
	const [showDescription, setShowDescription] = useState(showItem);
	const s = useStyles({ showDescription, descriptionHeight });

	useEffect(() => {
		setShowDescription(showItem);
	}, [showItem]);

	useEffect(() => {
		setDescriptionHeight(descriptionRef.current.offsetHeight);
	}, [descriptionRef]);

	return (
		<div className={s.main_container + ' ' + className}>
			<div className={s.question_container}>
				<Text text={question} textType={2} className={s.question_text} />
				<div className={s.question_arrow}>
					<DownArrow />
				</div>
			</div>

			<div
				className={s.answer_animated_container}
				style={{ height: `${showDescription ? `${descriptionHeight}px` : '0px'}` }}
			>
				<div className='h-fit w-full' ref={descriptionRef}>
					<Text textType={4} text={answer} className={s.answer_text} />
				</div>
			</div>
		</div>
	);
};

export default AccordionItem;
