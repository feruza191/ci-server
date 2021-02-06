import { Router } from 'express';

import { getJobs, getJob, addJob, getLogs } from './job.controller';

const router = Router();

router.get('/', getJobs);
router.get('/:jobId', getJob);
router.post('/:commitHash', addJob);
router.get('/:jobId/logs', getLogs);

export default router;
