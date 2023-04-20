import './App.css';
import RouterApp from './Router/RouterApp';
import OpeningSplash from './components/OpeningSplash/OpeningSplash';

const App = () => {
	return (
		<div className='App'>
			<OpeningSplash />
			<RouterApp />
		</div>
	);
};

export default App;
