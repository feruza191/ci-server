import express from 'express';

import { runAgent } from './agent.controller';

const router = express.Router();

router.post('/run', runAgent);

export default router;
