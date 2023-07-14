import './App.css';
import RouterApp from './Router/RouterApp';
import OpeningSplash from './components/OpeningSplash/OpeningSplash';
import Modal from './components/global_components/Modal/Modal';
import Toast from './components/global_components/Toast/Toast';

const App = () => {
	return (
		<div className='App'>
			<Modal />
			<Toast />
			<OpeningSplash />
			<RouterApp />
		</div>
	);
};

export default App;
