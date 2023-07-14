import React, { useState, useEffect, useCallback } from 'react';
import Text from '../Text/Text';
import useStyles from './useStyles';
import { openingSentence } from '../../data/openingSentences';
import { randomMinMax } from '../../utils/random';
import Loader from '../Loader/Loader';

const OpeningSplash = () => {
	const [sentenceToShow] = useState(
		openingSentence[randomMinMax(0, openingSentence.length - 1)]
		// openingSentence[2] // For testing individual sentences
	);
	const [showOpeningSplash, setShowOpeningSplash] = useState(true);
	const [showText, setShowText] = useState(false);
	const [showTextCanceled, setShowTextCanceled] = useState(true);
	const [hideBackGround, setHideBackGround] = useState(false);

	const [timerStartText, setTimerStartText] = useState(null);
	const [timerFinishText, setTimerFinishText] = useState(null);
	const [timerShowBg, setTimerShowBg] = useState(null);
	const [timerFinishComponent, setTimerFinishComponent] = useState(null);

	const s = useStyles({ showText, hideBackGround });

	const readingTime = useCallback(() => {
		const result = sentenceToShow.sentence.length * 100;
		if (result < 7000) {
			return 7000;
		} else {
			return result;
		}
	}, [sentenceToShow]);

	const handleClickAnyWhere = () => {
		clearTimeout(timerStartText);
		clearTimeout(timerFinishText);
		clearTimeout(timerShowBg);
		clearTimeout(timerFinishComponent);
		setHideBackGround(true);
		setShowText(false);
		setShowTextCanceled(false);
		setTimeout(() => {
			setShowOpeningSplash(false);
		}, 2000);
	};

	useEffect(() => {
		setTimerStartText(
			setTimeout(() => {
				setShowText(true);
			}, 1000)
		);
		return () => {
			clearTimeout(timerStartText);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		setTimerFinishText(
			setTimeout(() => {
				setShowText(false);
			}, readingTime() + 1000)
		);

		return () => {
			clearTimeout(timerFinishText);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		setTimerShowBg(
			setTimeout(() => {
				setHideBackGround(true);
			}, readingTime() + 2000)
		);

		return () => {
			clearTimeout(timerShowBg);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		setTimerFinishComponent(
			setTimeout(() => {
				setShowOpeningSplash(false);
			}, readingTime() + 3000)
		);

		return () => {
			clearTimeout(timerFinishComponent);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			{showOpeningSplash && (
				<div className={s.main_container} onClick={handleClickAnyWhere}>
					<div className={` ${s.fadeInAndOut_animation} ${s.loader_container}`}>
						<Loader />
					</div>
					{showTextCanceled && (
						<div className={s.text_container}>
							<div className={s.sentence_container}>
								<Text
									className={`${s.sentence_text} ${s.fadeInAndOut_animation}`}
									text={sentenceToShow?.sentence}
								/>
								<div className={s.author_container}>
									{sentenceToShow?.author.map((e, i) => {
										return (
											<Text
												key={i}
												className={`${i === 0 && 'mt-5'} ${i !== 0 && 'relative -top-3'} 
												${s.author_text}
												${s.fadeInAndOut_animation} 
											`}
												text={e}
												textType={2}
											/>
										);
									})}
								</div>
							</div>
						</div>
					)}
				</div>
			)}
		</>
	);
};

export default OpeningSplash;
