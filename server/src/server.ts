import 'reflect-metadata';

import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';

import { typeOrmConfig } from '../typeormconfig';
import { connectDb } from '../connectDb';
import routes from './routes';
import apiErrorHandler from './share/apiErrorHandler';
import { ssrMiddleware } from './ssr';

async function createApp() {
	const app = express();

	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(bodyParser.json());

	app.use('/api', routes);
	app.use(apiErrorHandler);

	const PORT = 3000;
	await connectDb(typeOrmConfig);
	const root = process.cwd();

	app.use(express.static(path.resolve(root, 'dist/client')));

	app.get('*', ssrMiddleware);

	app.listen(PORT, () => {
		// eslint-disable-next-line no-console
		console.log('Express server listening on http://localhost:3000');
	});
}

createApp();
