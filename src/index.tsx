import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { StartScreenPage } from './StartScreenPage/StartScreenPage';
import { HOME_PATH } from './constants';
import './index.css';

const App: FC = () => (
	<Router>
		<Switch>
			<Route exact path={HOME_PATH} component={StartScreenPage} />
		</Switch>
	</Router>
);

ReactDOM.render(<App />, document.getElementById('root'));
