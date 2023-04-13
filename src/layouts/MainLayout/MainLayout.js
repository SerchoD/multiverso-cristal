import { Outlet } from 'react-router';
import OpeningSplash from '../../components/OpeningSplash/OpeningSplash';

const MainLayout = () => {
	return (
		<div>
			<OpeningSplash />
			<Outlet />
		</div>
	);
};

export default MainLayout;
