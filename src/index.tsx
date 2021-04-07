import React from 'react';
import ReactDOM from 'react-dom';
import { loadableReady } from '@loadable/component';

import App from './App';

loadableReady(() => {
	ReactDOM.hydrate(<App />, document.getElementById('root'));
});
