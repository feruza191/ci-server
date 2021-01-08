import express from 'express';

const Controller = require('../controller/controller');

const router = express.Router();

router.get('/jobs', Controller.getAllJobs);

module.exports = router;
