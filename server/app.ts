import 'reflect-metadata';

import { createConnection } from 'typeorm';
import express from 'express';

const bodyParser = require('body-parser');

const jobsRoutes = require('./routes/jobs.routes');

// import { Routes } from './routes/Routes';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api', jobsRoutes);

const PORT = 3000;
createConnection()
	.then(async () => {
		app.listen(PORT, () => {
			// eslint-disable-next-line no-console
			console.log('Express server listening on http://localhost:3000');
		});
	})
	// eslint-disable-next-line no-console
	.catch((error) => console.log(error));
