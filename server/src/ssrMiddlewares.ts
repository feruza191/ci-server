import path from 'path';
import express, { Express } from 'express';

import { ssrInsertAppMiddleware } from './insertCompTemplate';

export function ssrMiddlewares(app: Express): void {
	const root = process.cwd();
	app.use(express.static(path.resolve(root, 'dist/client')));

	app.get('*', ssrInsertAppMiddleware);
}
