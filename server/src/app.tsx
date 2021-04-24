import 'reflect-metadata';

import React from 'react';
import express from 'express';
import bodyParser from 'body-parser';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
// import { Router } from 'react-router';
// import { createMemoryHistory } from 'history';
import fs from 'fs';
import path from 'path';
import { ChunkExtractor } from '@loadable/server';

import { typeOrmConfig } from '../typeormconfig';
import { connectDb } from '../connectDb';
import routes from './routes';
import apiErrorHandler from './share/apiErrorHandler';
import App from '../../src/App';

async function createApp() {
	const app = express();
	const statsFile = path.resolve('./dist/server/loadable-stats.json');
	const extractor = new ChunkExtractor({ statsFile });

	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(bodyParser.json());

	app.use('/api', routes);
	app.use(apiErrorHandler);

	const PORT = 3000;
	await connectDb(typeOrmConfig);

	app.use(express.static('dist'));

	app.get('*', (req, res) => {
		fs.readFile(
			path.resolve('./dist/client/index.html'),
			'utf-8',
			(err, data) => {
				if (err) {
					// eslint-disable-next-line no-console
					console.log({ err });
					return res.status(500).send('Some error happened');
				}

				const context = {};
				// const history = createMemoryHistory();
				const jsx = extractor.collectChunks(
					<StaticRouter location={req.url} context={context}>
						<App />
					</StaticRouter>
				);

				const component = renderToString(jsx);

				return res.send(
					data.replace(
						'<div id="root"></div>',
						`<div id="root">${component}</div>`
					)
				);
			}
		);
	});

	app.listen(PORT, () => {
		// eslint-disable-next-line no-console
		console.log('Express server listening on http://localhost:3000');
	});
}

createApp();
