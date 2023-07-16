import React from 'react';
import { useNavigate } from 'react-router-dom';
import HomeCards from '../../components/HomeCards/HomeCards';
import { shuffleArray } from '../../utils/utils';
import PageContainer from '../../components/PageContainer/PageContainer';
import useStyles from './useStyles';
import { CARD_DATA } from './homeCardsData';
import IconCrystal1 from '../../assets/icons/IconCrystal1';

const ELEMENTS = shuffleArray(CARD_DATA);

const Home = () => {
	const s = useStyles();
	const navigate = useNavigate();

	const handleCardClick = ({ route }) => {
		if (route) {
			navigate(route);
		}
	};

	return (
		<PageContainer showTopBar={false}>
			<div className={s.title_container}>
				<div className={s?.logo_container}>
					<IconCrystal1 size='150px' />
				</div>
				<div
					className='flex flex-col items-center justify-center p-2'
					style={{ filter: 'drop-shadow(0px 0px 8px rgba(250, 250, 0, 0.5))' }}
				>
					<h1 className='px-5'>Multiverso</h1>
					<h1 className='px-5'>Cristal</h1>
				</div>
			</div>
			{ELEMENTS.map((cardData, index) => {
				return (
					<HomeCards
						onClick={() => handleCardClick({ route: cardData.route })}
						key={index}
						cardData={cardData}
						index={index}
						length={ELEMENTS.length - 1}
					/>
				);
			})}
		</PageContainer>
	);
};

export default Home;
