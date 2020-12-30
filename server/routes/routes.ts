// const path = require('path');
// const express = require('express');

const Controller = require('../controllers/controller');

const router = express.Router();

router.get('/api/settings', Controller.getSettings);
