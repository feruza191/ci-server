import express from 'express';

import { getSettings, saveSettings } from './settings.controller';

const router = express.Router();

export const getSettingsRoute = router.get('/settings', getSettings);
export const saveSettingsRoute = router.post('/settings', saveSettings);
