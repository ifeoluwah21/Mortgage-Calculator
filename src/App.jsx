import { Provider } from 'react-redux';
import './App.scss';
import Layout from './components/Layout/Layout';
import { store } from './components/store/store';

function App() {
	return (
		<>
			<Provider store={store}>
				<Layout />
			</Provider>
		</>
	);
}

export default App;
