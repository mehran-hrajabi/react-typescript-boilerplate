import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import DummyComponent from './components/DummyComponent/DummyComponent';
import './assets/styles/global.scss';

const App: React.FC = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path='/' component={Landing} exact />
				<Route path='/hello' component={DummyComponent} />
			</Switch>
		</BrowserRouter>
	);
};

export default App;
