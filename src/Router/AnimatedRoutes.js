import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout/MainLayout';
import { PATHS } from '../constants/paths';
import Home from '../pages/Home/Home';
import GemstoneTherapy from '../pages/GemstoneTherapy/GemstoneTherapy';

import { AnimatePresence } from 'framer-motion';
import AstralSurgery from '../pages/AstralSurgery/AstralSurgery';

const AnimatedRoutes = () => {
	const location = useLocation();
	return (
		<AnimatePresence>
			<Routes location={location} key={location.pathname}>
				<Route path={PATHS.BASE_URL} element={<MainLayout />}>
					<Route index element={<Home />} />

					<Route path={PATHS.GEMSTONE_THERAPY} element={<GemstoneTherapy />} />
					<Route path={PATHS.ASTRAL_SURGERY} element={<AstralSurgery />} />
				</Route>

				<Route path='*' element={<Navigate to={PATHS.BASE_URL} />} />
			</Routes>
		</AnimatePresence>
	);
};

export default AnimatedRoutes;
