import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter as Router } from 'react-router-dom';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';
import { loadableReady } from '@loadable/component';

import App from './App';

const history = createBrowserHistory();

loadableReady(() => {
	ReactDOM.hydrate(
		<Router history={history}>
			<App />
		</Router>,
		document.getElementById('root')
	);
});
