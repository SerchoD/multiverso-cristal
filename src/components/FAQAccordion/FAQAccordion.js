import React, { useEffect, useRef, useState } from 'react';
import AccordionItem from '../AccordionItem/AccordionItem';
import useStyles from './useStyles';
import Button from '../Button/Button';
import IconSearch from '../../assets/icons/IconSearch';
import IconCross from '../../assets/icons/IconCross';

const FAQ_EMPTY = [
	{ question: 'No se encuentran resultados', answer: [''], isEmpty: true },
];

const FaQAccordion = ({ FAQ, className }) => {
	const accordionHeightRef = useRef(null);
	const [itemToShow, setItemToShow] = useState(false);
	const [showAccordion, setShowAccordion] = useState(true); // TODO PONER EN FALSE
	const [contentHeight, setContentHeight] = useState(null);
	const [filterKey, setFilterKey] = useState('');
	const [filteredFAQList, setFilteredFAQList] = useState(FAQ_EMPTY);
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

	const handleChangeFilterInput = (e) => {
		setFilterKey(e.target.value);
	};

	const handleDeleteFilterKey = () => {
		setFilterKey('');
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

	useEffect(() => {
		const normalizedFilterKey = filterKey
			.normalize('NFD')
			.replace(/[\u0300-\u036f]/g, '');
		setFilteredFAQList(
			FAQ?.filter(
				(e) =>
					e?.question
						.normalize('NFD')
						.replace(/[\u0300-\u036f]/g, '')
						.toLowerCase()
						.includes(normalizedFilterKey.toLowerCase()) ||
					(Array.isArray(e?.answer) &&
						e.answer.some((a) =>
							a
								.normalize('NFD')
								.replace(/[\u0300-\u036f]/g, '')
								.toLowerCase()
								.includes(normalizedFilterKey.toLowerCase())
						))
			)
		);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [filterKey]);

	useEffect(() => {
		if (filteredFAQList.length === 0) {
			setFilteredFAQList(FAQ_EMPTY);
		}
	}, [filteredFAQList]);

	return (
		<>
			<Button
				text='Preguntas Frecuentes'
				textType={2}
				btnType={1}
				onClick={handleShowAccordion}
				textClassName='text-xl'
			/>
			<div
				className={`${s.main_container} ${className}`}
				// TODO BORRAR ESTE TRUE
				style={{
					height: `${showAccordion || true ? contentHeight : '0px'}`,
				}}
			>
				<div
					className='h-fit w-full flex flex-col justify-start items-center'
					ref={accordionHeightRef}
				>
					<div className='flex w-full mb-1 h-fit rounded-xl'>
						<input
							type='text'
							className={s?.input}
							placeholder='Buscar...'
							onChange={handleChangeFilterInput}
							value={filterKey}
						/>
						{filterKey === '' ? (
							<div className='relative -left-8 top-2'>
								<IconSearch />
							</div>
						) : (
							<div
								className='w-fit h-fit pb-2  relative -left-8 top-2 cursor-pointer'
								onClick={handleDeleteFilterKey}
							>
								<IconCross />
							</div>
						)}
					</div>
					{filteredFAQList?.map((e, index) => {
						if (e?.question === '') {
							// Este IF está para solucionar el bug del primer elemento
							// que no se expande correctamente.
							return null;
						}

						return (
							<div
								key={index}
								onClick={() => handleItemClick({ itemIndex: index })}
								className='flex justify-center w-[100%]'
							>
								<AccordionItem
									question={e?.question}
									answer={e?.answer}
									isEmpty={e?.isEmpty}
									showItem={itemToShow === index}
									className={`${
										index === 0 || (index === 1 && filterKey === '') ? 'rounded-t-xl' : null
									} ${index === filteredFAQList.length - 1 && 'rounded-b-xl'} `}
								/>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default FaQAccordion;
