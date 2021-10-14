import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Landing from './components/Landing/Landing';
import DummyComponent from './components/DummyComponent/DummyComponent';
import './assets/styles/global.scss';

const App: React.FC = () => {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Switch>
					<Route path='/' component={Landing} exact />
					<Route path='/hello' component={DummyComponent} />
				</Switch>
			</BrowserRouter>
		</Provider>
	);
};

export default App;
