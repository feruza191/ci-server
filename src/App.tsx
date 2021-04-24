import React, { FC } from 'react';
import { Route, Switch } from 'react-router-dom';

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
	<Switch>
		<Route exact path={HOME_PATH} component={StartScreenPage} />
		<Route path={SETTINGS_PATH} component={SettingsPage} />
		<Route path={BUILD_HISTORY_PATH} component={BuildHistory} />
		<Route path={BUILD_DETAILS_PATH} component={BuildDetails} />
	</Switch>
);

export default App;
