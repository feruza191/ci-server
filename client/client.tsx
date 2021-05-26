import React, { FC } from 'react';
import { Route, Switch } from 'react-router-dom';
import loadable from '@loadable/component';

import {
	HOME_PATH,
	SETTINGS_PATH,
	BUILD_HISTORY_PATH,
	BUILD_DETAILS_PATH,
} from './constants';
import './index.css';

const BuildDetails = loadable(
	() =>
		import(
			/* webpackChunkName: "BuildDetails" */ './components/BuildDetailsPage/BuildDetailsPage'
		),
	{ ssr: true }
);
const BuildHistory = loadable(
	() =>
		import(
			/* webpackChunkName: "BuildHistory" */ './components/BuildHistoryPage/BuildHistoryPage'
		),
	{ ssr: true }
);
const SettingsPage = loadable(
	() =>
		import(
			/* webpackChunkName: "SettingsPage" */ './components/SettingsPage/SettingsPage'
		),
	{ ssr: true }
);
const StartScreenPage = loadable(
	() =>
		import(
			/* webpackChunkName: "StartScreenPage" */ './components/StartScreenPage/StartScreenPage'
		),
	{ ssr: true }
);

const App: FC = () => (
	<Switch>
		<Route exact path={HOME_PATH} component={StartScreenPage} />
		<Route path={SETTINGS_PATH} component={SettingsPage} />
		<Route path={BUILD_HISTORY_PATH} component={BuildHistory} />
		<Route path={BUILD_DETAILS_PATH} component={BuildDetails} />
	</Switch>
);

export default App;
