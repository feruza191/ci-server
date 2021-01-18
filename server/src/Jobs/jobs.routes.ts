import express from 'express';

import { getAllJobs, getJob, addJob, getLogs } from './jobs.controllers';

const router = express.Router();

export const getAllJobsRoute = router.get('/jobs', getAllJobs);
export const getJobRoute = router.get('/jobs/:jobId', getJob);
export const addJobRoute = router.post('/jobs/:commitHash', addJob);
export const getLogsRoute = router.get('/jobs/:jobId/logs', getLogs);
