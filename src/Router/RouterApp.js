import { BrowserRouter } from 'react-router-dom';
import AnimatedRoutes from './AnimatedRoutes';

const RouterApp = () => {
	return (
		<BrowserRouter>
			<AnimatedRoutes />
		</BrowserRouter>
	);
};

export default RouterApp;
