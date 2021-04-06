import 'reflect-metadata';

import React from 'react';
import express from 'express';
import bodyParser from 'body-parser';
import { renderToString } from 'react-dom/server';

import { typeOrmConfig } from '../typeormconfig';
import { connectDb } from '../connectDb';
import routes from './routes';
import apiErrorHandler from './share/apiErrorHandler';
import App from '../../src/App';

async function createApp() {
	const app = express();

	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(bodyParser.json());

	app.use('/api', routes);
	app.use(apiErrorHandler);

	const PORT = 3000;
	await connectDb(typeOrmConfig);

	app.use(express.static('build'));
	app.get('/', (_, res) => {
		const component = renderToString(<App />);
		const html = `
			<!DOCTYPE html>
			<html lang="en">
				<head>
					<meta charset="UTF-8" />
					<meta name="viewport" content="width=device-width, initial-scale=1.0" />
					<meta http-equiv="X-UA-Compatible" content="ie=edge" />
					<title>Document</title>
				</head>
				<body>
					<div id="root">${component}</div>
					<script src='./build/bundle.js'></script>
				</body>
			</html>	
		`;

		res.send(html);
	});

	app.listen(PORT, () => {
		// eslint-disable-next-line no-console
		console.log('Express server listening on http://localhost:3000');
	});
}

createApp();
