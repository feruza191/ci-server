import path from 'path';
import express, { Express } from 'express';

import { ssrInsertAppMiddleware } from './insertCompTemplate';

const root = process.cwd();

export function ssrMiddlewares(app: Express): void {
	app.use(express.static(path.resolve(root, 'dist/client')));

	app.get('*', ssrInsertAppMiddleware);
}
