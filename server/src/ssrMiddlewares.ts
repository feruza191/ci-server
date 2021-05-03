import path from 'path';
import express from 'express';

import { ssrInsertAppMiddleware } from './insertCompTemplate';

export const ssrMiddleWares = (): void => {
	const app = express();

	const root = process.cwd();
	app.use(express.static(path.resolve(root, 'dist/client')));

	app.get('*', ssrInsertAppMiddleware);
};
