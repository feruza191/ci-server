import 'reflect-metadata';

import express from 'express';
import bodyParser from 'body-parser';

import { typeOrmConfig } from '../typeormconfig';
import { connectDb } from '../connectDb';
import {
	getJobsRoute,
	getJobRoute,
	addJobRoute,
	getLogsRoute,
} from './Jobs/job.routes';
import {
	getSettingsRoute,
	saveSettingsRoute,
} from './Settings/settings.routes';

async function createApp() {
	const app = express();

	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(bodyParser.json());

	app.use('/api', getJobsRoute);
	app.use('/api/jobs', getJobRoute);
	app.use('/api/jobs', addJobRoute);
	app.use('/api/jobs', getLogsRoute);
	app.use('/api/jobs', getSettingsRoute);
	app.use('/api/jobs', saveSettingsRoute);

	const PORT = 3000;
	await connectDb(typeOrmConfig);

	app.listen(PORT, () => {
		// eslint-disable-next-line no-console
		console.log('Express server listening on http://localhost:3000');
	});
}

createApp();
