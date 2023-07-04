import React, { useEffect, useRef, useState } from 'react';
import Text from '../Text/Text';
import DownArrow from '../../assets/icons/DownArrow';
import useStyles from './useStyles';

const AccordionItem = ({
	question,
	answer,
	showItem,
	isEmpty = false,
	className,
}) => {
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
		<div className={`${s.main_container} ${className}`}>
			<div className={s.question_container}>
				<Text text={question} textType={2} className={s.question_text} />
				{!isEmpty && (
					<div className={s.question_arrow}>
						<div className={s?.question_arrow_2}>
							<DownArrow />
						</div>
					</div>
				)}
			</div>

			<div
				className={s?.answer_animated_container}
				style={{ height: `${showDescription ? `${descriptionHeight}px` : '0px'}` }}
			>
				<div className={s?.answer_container} ref={descriptionRef}>
					{answer?.map((paragraph, index) => (
						<Text key={index} textType={4} text={paragraph} className={s?.answer_text} />
					))}
				</div>
			</div>
		</div>
	);
};

export default AccordionItem;
