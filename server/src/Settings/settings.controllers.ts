/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
import { Request, Response } from 'express';

import { SettingsServices } from './settings.services';

const settingServices = new SettingsServices();

export const getSettings = async (_: Request, res: Response): Promise<any> => {
	try {
		const settings = await settingServices.getAllSettings();

		return res.json(settings);
	} catch (err) {
		console.log(err);
		return res.status(500).json({ message: err.message });
	}
};

export const saveSettings = async (
	req: Request,
	res: Response
): Promise<any> => {
	const { repoName, mainBranch, period } = req.body;

	try {
		const settings = await settingServices.saveAllSettings(
			repoName,
			mainBranch,
			period
		);

		await settingServices.gitClone(repoName);

		return res.status(201).json(settings);
	} catch (err) {
		console.log(err);
		return res.status(500).json(err);
	}
};
