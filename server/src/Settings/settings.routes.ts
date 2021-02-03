import { Router } from 'express';

import {
	getSettings,
	saveSettings,
	deleteSettings,
} from './settings.controller';

const router = Router();

router.get('/', getSettings);
router.post('/', saveSettings);
router.delete('/', deleteSettings);

export default router;
