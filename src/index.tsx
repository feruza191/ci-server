import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';
import StartScreenPage from './StartScreenPage/StartScreenPage';

const App: FC = () => (
	<Router>
		<Switch>
			<Route exact path='/' component={StartScreenPage} />
		</Switch>
	</Router>
);

ReactDOM.render(<App />, document.getElementById('root'));
