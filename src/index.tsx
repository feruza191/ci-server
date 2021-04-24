import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter as Router } from 'react-router-dom';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';

import App from './App';

const history = createBrowserHistory();

ReactDOM.hydrate(
	<Router history={history}>
		<App />
	</Router>,
	document.getElementById('root')
);
