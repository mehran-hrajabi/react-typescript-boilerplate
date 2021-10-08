import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import FirstMockComponent from './components/FirstMockComponent/FirstMockComponent';
import SecondMockComponent from './components/SecondMockComponent/SecondMockComponent';

const App: React.FC = () => {
 
	return (
		<BrowserRouter>
            <Switch>
				<Route path="/hello" component={FirstMockComponent} />
				<Route path="/howareyou" component={SecondMockComponent} />
			</Switch>
        </BrowserRouter>
	)
}

export default App;