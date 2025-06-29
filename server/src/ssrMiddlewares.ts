/* eslint-disable import/no-extraneous-dependencies */
import express, { Express } from 'express';
import webpack from 'webpack';
import path from 'path';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import dotenv from 'dotenv';

import { getRequire } from './share/helpers/getRequire';
import { createSupportSSR } from '../../client/server';

const root = process.cwd();

dotenv.config({ path: path.resolve(root, '.env.local') });
dotenv.config({ path: path.resolve(root, '.env') });

// eslint-disable-next-line import/no-dynamic-require
const webpackConfig = getRequire()(path.resolve(root, 'webpack.config.client'));

const __DEV__ = process.env.NODE_ENV !== 'production';

export function ssrMiddlewares(app: Express): void {
	if (!__DEV__) {
		app.use(express.static(path.resolve(root, 'dist', 'client')));
	}

	if (__DEV__) {
		webpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin());

		const compiler = webpack(webpackConfig);

		app.use(
			webpackDevMiddleware(compiler, {
				publicPath: webpackConfig.output.publicPath,
			})
		);
		app.use(webpackHotMiddleware(compiler));
	}

	app.get('*', createSupportSSR);
}
