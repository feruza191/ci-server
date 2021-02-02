/* eslint-disable no-console */
import { Request, Response } from 'express';

import { SettingsService } from './settings.service';
import { SandboxService } from '../share/sandboxService';

const settingServices = new SettingsService();
const services = new SandboxService();

export const getSettings = async (
	_: Request,
	res: Response
): Promise<Response> => {
	try {
		const settings = await settingServices.getSettings();

		return res.json(settings);
	} catch (err) {
		console.log(err);
		return res.status(500).json({ message: err.message });
	}
};

export const saveSettings = async (
	req: Request,
	res: Response
): Promise<Response> => {
	const { repoName, mainBranch, period } = req.body;

	try {
		const settings = await settingServices.saveSettings(
			repoName,
			mainBranch,
			period
		);
		services.gitClone(repoName);

		return res.json(settings);
	} catch (err) {
		console.log(err);
		return res.status(500).json(err);
	}
};
