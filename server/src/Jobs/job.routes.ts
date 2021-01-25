import express from 'express';

import { getJobs, getJob, addJob, getLogs } from './job.controller';

const router = express.Router();

export const getJobsRoute = router.get('/jobs', getJobs);
export const getJobRoute = router.get('/jobs/:jobId', getJob);
export const addJobRoute = router.post('/jobs/:commitHash', addJob);
export const getLogsRoute = router.get('/jobs/:jobId/logs', getLogs);
