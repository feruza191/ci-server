const express = require('express');
const bodyParser = require('body-parser');

// import { Routes } from './routes/Routes';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const PORT = 3000;
app.listen(PORT, () => {
	// eslint-disable-next-line no-console
	console.log('Express server listening on http://localhost:3000');
});
