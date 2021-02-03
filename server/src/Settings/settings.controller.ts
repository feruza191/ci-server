/* eslint-disable no-console */
import { Request, Response } from 'express';

import { SettingsService } from './settings.service';
import { SandboxService } from '../share/sandboxService';
import { Settings } from './settings.entity';

const settingServices = new SettingsService();
const services = new SandboxService();

export const getSettings = async (
	_: Request,
	res: Response<Settings>
): Promise<Response | undefined> => {
	try {
		const settings = await settingServices.getSettings();

		if (settings) {
			return res.json(settings);
		}
	} catch (err) {
		console.log(err);
		return res.status(500).json(err);
	}
};

export const saveSettings = async (
	req: Request<
		Record<string, unknown>,
		unknown,
		{ repoName: string; mainBranch: string; period: number }
	>,
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

export const deleteSettings = async (
	_: Request,
	res: Response<{ message: string }>
): Promise<Response> => {
	try {
		await settingServices.deleteSettings();

		return res.json({ message: 'Settings deleted successfully' });
	} catch (err) {
		console.log({ err });
		return res.status(404).json(err);
	}
};
