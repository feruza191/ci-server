import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { BuildDetails } from './components/BuildDetailsPage/BuildDetailsPage';
import { BuildHistory } from './components/BuildHistoryPage/BuildHistoryPage';
import { SettingsPage } from './components/SettingsPage/SettingsPage';
import { StartScreenPage } from './components/StartScreenPage/StartScreenPage';
import {
	HOME_PATH,
	SETTINGS_PATH,
	BUILD_HISTORY_PATH,
	BUILD_DETAILS_PATH,
} from './constants';
import './index.css';

const App: FC = () => (
	<Router>
		<Switch>
			<Route exact path={HOME_PATH} component={StartScreenPage} />
			<Route path={SETTINGS_PATH} component={SettingsPage} />
			<Route path={BUILD_HISTORY_PATH} component={BuildHistory} />
			<Route path={BUILD_DETAILS_PATH} component={BuildDetails} />
		</Switch>
	</Router>
);

ReactDOM.render(<App />, document.getElementById('root'));
