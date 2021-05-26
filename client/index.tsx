import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { loadableReady } from '@loadable/component';

import App from './client';

loadableReady(() => {
	ReactDOM.hydrate(
		<Router>
			<App />
		</Router>,
		document.getElementById('root')
	);
});
