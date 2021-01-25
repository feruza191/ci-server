/* eslint-disable no-console */
import { Request, Response } from 'express';

import { SettingsServices } from './settings.service';
import { Services } from '../share/service';

const settingServices = new SettingsServices();
const services = new Services();

export const getSettings = async (
	_: Request,
	res: Response
): Promise<Response> => {
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
): Promise<Response> => {
	const { repoName, mainBranch, period } = req.body;

	try {
		const settings = await settingServices.saveAllSettings(
			repoName,
			mainBranch,
			period
		);

		await services.gitClone(repoName);

		return res.json(settings);
	} catch (err) {
		console.log(err);
		return res.status(500).json(err);
	}
};
