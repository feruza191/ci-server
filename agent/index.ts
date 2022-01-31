import express from 'express';

import apiErrorHandler from '../server/src/share/apiErrorHandler';
import router from './agent.routes';

async function createApp() {
	const app = express();

	app.use(express.urlencoded({ extended: false }));
	app.use(express.json());

	app.use('/api', router);
	app.use(apiErrorHandler);

	const PORT = 8080;

	app.listen(PORT, () => {
		// eslint-disable-next-line no-console
		console.log('Agent server listening on http://localhost:8080');
	});
}

createApp();
