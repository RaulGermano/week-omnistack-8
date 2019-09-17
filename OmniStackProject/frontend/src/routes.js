import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './pages/Login/index';
import Main from './pages/Main/index';

function Routes() {
	return (
		<BrowserRouter>
			<Route path='/' exact component={Login} />
			<Route path='/dev/:id' component={Main} />
		</BrowserRouter>
	);
}

export default Routes;
