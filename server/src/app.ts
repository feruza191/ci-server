import 'reflect-metadata';

import express from 'express';
import bodyParser from 'body-parser';

import { typeOrmConfig } from '../typeormconfig';
import { connectDb } from '../connectDb';
import routes from './routes';

async function createApp() {
	const app = express();

	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(bodyParser.json());

	app.use('/api', routes);

	const PORT = 3000;
	await connectDb(typeOrmConfig);

	app.listen(PORT, '0.0.0.0', () => {
		// eslint-disable-next-line no-console
		console.log('Express server listening on http://localhost:3000');
	});
}

createApp();
