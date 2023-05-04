import React from 'react';
import { useNavigate } from 'react-router-dom';
import HomeCards from '../../components/HomeCards/HomeCards';
import { shuffleArray } from '../../utils/utils';
import PageContainer from '../../components/PageContainer/PageContainer';
import useStyles from './useStyles';
import { CARD_DATA } from './homeCardsData';

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
				<h1>Multiverso</h1>
				<h1>Cristal</h1>
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
