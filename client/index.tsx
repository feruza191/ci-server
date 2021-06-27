import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { loadableReady } from '@loadable/component';
import { configure } from 'mobx';

import App from './client';

const __DEV__ = process.env.NODE_ENV !== 'production';

if (__DEV__) {
	configure({ enforceActions: 'always' });
}

loadableReady(() => {
	ReactDOM.hydrate(
		<Router>
			<App />
		</Router>,
		document.getElementById('root')
	);
});
