import React, { useRef } from 'react';
import Text from '../Text/Text';
import useStyles from './useStyles';

const HomeCards = ({ cardData, index, length, onClick }) => {
	const s = useStyles({ card_img: cardData?.image, index, length });

	const descriptionRef = useRef(null);

	const handleResetScroll = () => {
		if (descriptionRef.current) {
			descriptionRef.current.scrollTop = 0;
		}
	};

	return (
		<div key={index} className={s.card_container} onClick={onClick}>
			<div name='img' className={s.img_container}></div>

			<div name='text' className={s.text_container}>
				<Text className={s.card_title} text={cardData?.title} textType='title_1' />

				<div
					ref={descriptionRef}
					className={s.description_container}
					onMouseLeave={handleResetScroll}
				>
					<Text
						className={s.card_description}
						text={cardData?.description}
						textType='text_1'
					/>
				</div>
			</div>
		</div>
	);
};

export default HomeCards;
