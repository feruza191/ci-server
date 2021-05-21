import React from 'react';
import { Request, Response, NextFunction } from 'express';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { ServerStyleSheet } from 'styled-components';
import { ChunkExtractor } from '@loadable/server';
import fs from 'fs';
import path from 'path';

import App from '../../src/App';

const root = process.cwd();
const statsFile = path.resolve(root, 'dist', 'client', 'loadable-stats.json');
const extractor = new ChunkExtractor({ statsFile });

export const createSupportSSR = (
	req: Request<string>,
	res: Response<string>,
	next: NextFunction
): Promise<Response<string>> | void => {
	if (req.url.includes('.')) {
		return next();
	}

	fs.readFile(
		path.resolve(root, './src/index.html'),
		'utf-8',
		(err, data) => {
			if (err) {
				// eslint-disable-next-line no-console
				console.log({ err });
				return res.status(500).send('Some error happened');
			}
			const serverStyles = new ServerStyleSheet();

			const jsx = extractor.collectChunks(
				<StaticRouter location={req.url}>
					<App />
				</StaticRouter>
			);

			const scripts = extractor.getScriptTags();
			const styles = extractor.getStyleTags();

			const component = renderToString(serverStyles.collectStyles(jsx));
			let dataComp = data;

			dataComp = dataComp.replace('<!--component-->', component);
			dataComp = dataComp.replace('<!--scripts-->', scripts);
			dataComp = dataComp.replace(
				'<!--styles-->',
				`${styles} ${serverStyles.getStyleTags()}`
			);

			return res.send(dataComp);
		}
	);
};
