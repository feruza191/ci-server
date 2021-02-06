import express from 'express';

import settingsRoutes from './Settings/settings.routes';
import jobRoutes from './Jobs/job.routes';

const router = express.Router();

router.use('/jobs', jobRoutes);
router.use('/settings', settingsRoutes);

export default router;
