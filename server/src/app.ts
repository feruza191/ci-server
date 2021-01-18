import 'reflect-metadata';

import express from 'express';
import bodyParser from 'body-parser';

import { typeOrmConfig } from '../typeormconfig';
import { connectDb } from '../connectDb';
import {
	getAllJobsRoute,
	getJobRoute,
	addJobRoute,
	getLogsRoute,
} from './Jobs/jobs.routes';
import {
	getSettingsRoute,
	saveSettingsRoute,
} from './Settings/settings.routes';

async function createApp() {
	const app = express();

	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(bodyParser.json());

	app.use('/api', getAllJobsRoute);
	app.use('/api', getJobRoute);
	app.use('/api', addJobRoute);
	app.use('/api', getLogsRoute);
	app.use('/api', getSettingsRoute);
	app.use('/api', saveSettingsRoute);

	const PORT = 3000;
	await connectDb(typeOrmConfig);

	app.listen(PORT, () => {
		// eslint-disable-next-line no-console
		console.log('Express server listening on http://localhost:3000');
	});
}

createApp();
