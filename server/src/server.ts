/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable camelcase */
/* eslint-disable import/no-extraneous-dependencies */
import 'reflect-metadata';

import express from 'express';
import bodyParser from 'body-parser';
import webpack from 'webpack';
import path from 'path';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

import { typeOrmConfig } from '../typeormconfig';
import { connectDb } from '../connectDb';
import routes from './routes';
import apiErrorHandler from './share/apiErrorHandler';
import { ssrMiddlewares } from './ssrMiddlewares';

const root = process.cwd();

declare const __webpack_require__: Function;
declare const __non_webpack_require__: Function;

const getRequire = () =>
	typeof __webpack_require__ === 'function'
		? __non_webpack_require__
		: require;

// eslint-disable-next-line import/no-dynamic-require
const webpackConfig = getRequire()(path.resolve(root, 'webpack.config.client'));

const devServerEnabled = process.env.NODE_ENV === 'development';

async function createApp() {
	const app = express();

	if (devServerEnabled) {
		webpackConfig.entry.src.unshift(
			'webpack-hot-middleware/client?reload=true&timeout=1000'
		);

		webpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin());

		const compiler = webpack(webpackConfig);
		app.use(
			webpackDevMiddleware(compiler, {
				publicPath: webpackConfig.output.publicPath,
			})
		);
		app.use(webpackHotMiddleware(compiler));
	}

	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(bodyParser.json());

	app.use('/api', routes);
	app.use(apiErrorHandler);

	const PORT = 3000;
	await connectDb(typeOrmConfig);

	ssrMiddlewares(app);

	app.listen(PORT, () => {
		// eslint-disable-next-line no-console
		console.log('Express server listening on http://localhost:3000');
	});
}

createApp();
