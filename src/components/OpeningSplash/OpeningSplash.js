import React, { useState, useEffect } from 'react';
import Text from '../Text/Text';
import useStyles from './useStyles';
import { openingSentence } from '../../data/openingSentences';
import { randomMinMax } from '../../utils/random';

const OpeningSplash = () => {
	const [sentenceToShow] = useState(
		openingSentence[randomMinMax(0, openingSentence.length - 1)]
		// openingSentence[11] // For testing individual sentences
	);
	const [showOpeningSplash, setShowOpeningSplash] = useState(true);
	const [showText, setShowText] = useState(false);
	const [hideBackGround, setHideBackGround] = useState(false);

	const readingTime = () => {
		const result = sentenceToShow.sentence.length * 130;
		if (result < 7000) {
			return 7000;
		} else {
			return result;
		}
	};

	const s = useStyles({ showText, hideBackGround });

	const handleClickAnyWhere = () => {
		setHideBackGround(true);
		setShowText(false);
		setTimeout(() => {
			setShowOpeningSplash(false);
		}, 1000);
	};

	useEffect(() => {
		setTimeout(() => {
			setShowText(true);
		}, 2000);
	}, []);

	useEffect(() => {
		setTimeout(() => {
			setShowText(false);
		}, readingTime() + 1000);
	}, []);

	useEffect(() => {
		setTimeout(() => {
			setHideBackGround(true);
		}, readingTime() + 3000);
	}, []);

	useEffect(() => {
		setTimeout(() => {
			setShowOpeningSplash(false);
		}, readingTime() + 4000);
	}, []);

	return (
		<>
			{showOpeningSplash && (
				<div className={s.main_container} onClick={handleClickAnyWhere}>
					<div className={s.text_container}>
						<div className={s.sentence_container}>
							<Text
								className={`${s.sentence_text} ${s.text_animation}`}
								text={sentenceToShow?.sentence}
							/>
							<div className={s.author_container}>
								{sentenceToShow?.author.map((e, i) => {
									return (
										<Text
											key={i}
											className={`${i === 0 && 'mt-10'} ${s.author_text} ${s.text_animation} italic`}
											text={e}
											textType={'text_1'}
										/>
									);
								})}
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default OpeningSplash;
