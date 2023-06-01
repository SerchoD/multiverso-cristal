import './App.css';
import RouterApp from './Router/RouterApp';
import OpeningSplash from './components/OpeningSplash/OpeningSplash';
import Toast from './components/Toast/Toast';

const App = () => {
	return (
		<div className='App'>
			<OpeningSplash />
			<RouterApp />
			<Toast />
		</div>
	);
};

export default App;
