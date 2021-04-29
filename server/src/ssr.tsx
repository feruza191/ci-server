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
const statsFile = path.resolve('./dist/client/loadable-stats.json');
const extractor = new ChunkExtractor({ statsFile });

export const ssrMiddleware = (
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
			const css = new ServerStyleSheet();
			const context = {};
			const jsx = extractor.collectChunks(
				<StaticRouter location={req.url} context={context}>
					<App />
				</StaticRouter>
			);

			const scripts = extractor.getScriptTags();
			const styles = extractor.getStyleTags();

			const component = renderToString(css.collectStyles(jsx));
			let dataComp = data;
			dataComp = dataComp.replace(
				'<div id="root"></div>',
				`<div id="root">${component}</div>`
			);
			dataComp = dataComp.replace('<!--scripts-->', scripts);
			dataComp = dataComp.replace(
				'<!--styles-->',
				styles + css.getStyleTags()
			);

			return res.send(dataComp);
		}
	);
};
