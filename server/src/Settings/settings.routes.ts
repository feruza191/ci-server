import { Router } from 'express';

import { getSettings, saveSettings } from './settings.controller';

const router = Router();

router.get('/', getSettings);
router.post('/', saveSettings);

export default router;
