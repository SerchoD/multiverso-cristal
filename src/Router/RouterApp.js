import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout/MainLayout';
import { PATHS } from '../constants/paths';
import Home from '../pages/Home/Home';
import GemstoneTherapy from '../pages/GemstoneTherapy/GemstoneTherapy';

const RouterApp = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path={PATHS.BASE_URL} element={<MainLayout />}>
					<Route index element={<Home />} />
					<Route path={PATHS.GEMSTONE_THERAPY} element={<GemstoneTherapy />} />
				</Route>

				<Route path='*' element={<Navigate to={PATHS.BASE_URL} />} />
			</Routes>
		</BrowserRouter>
	);
};

export default RouterApp;
