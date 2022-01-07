import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Landing from './components/Landing/Landing';
import DummyComponent from './components/DummyComponent/DummyComponent';
import './assets/styles/global.scss';

const App: React.FC = () => {
	return (
		<Provider store={store}>
			<Router>
				<Routes>
					<Route path='/' element={<Landing />} />
					<Route path='/hello' element={<DummyComponent />} />
				</Routes>
			</Router>
		</Provider>
	);
};

export default App;
