import express from 'express';

import { getAllJobs } from '../controllers/jobs.controllers';

const router = express.Router();

export const jobsRoutes = router.get('/jobs', getAllJobs);
