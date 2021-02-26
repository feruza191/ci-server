import { Request, Response, NextFunction } from 'express';

import { SettingsService } from './settings.service';
import { SandboxService } from '../share/sandboxService';
import { Settings } from './settings.entity';
import { AnyObject } from '../types';
import { ErrorHandler } from '../share/errorHandler';

const settingServices = new SettingsService();
const sandBoxService = new SandboxService();

export const getSettings = async (
	_: Request,
	res: Response<Settings>,
	next: NextFunction
): Promise<Response<Settings> | undefined> => {
	try {
		const settings = await settingServices.getSettings();

		return res.json(settings);
	} catch (err) {
		next(ErrorHandler.internalError('Could not retrieve all settings!'));
	}
};

export const saveSettings = async (
	req: Request<
		AnyObject,
		unknown,
		{ repoName: string; mainBranch: string; period: number }
	>,
	res: Response,
	next: NextFunction
): Promise<Response<Settings> | undefined> => {
	const { repoName, mainBranch, period } = req.body;

	if (!repoName) {
		next(
			ErrorHandler.badRequest(
				'repoName is required and must be non blank'
			)
		);
	}

	if (!mainBranch) {
		next(
			ErrorHandler.badRequest(
				'mainBranch is required and must be non blank'
			)
		);
	}

	if (!period) {
		next(
			ErrorHandler.badRequest('period is required and must be non blank')
		);
	}

	try {
		const settings = await settingServices.saveSettings(
			repoName,
			mainBranch,
			period
		);

		sandBoxService.gitClone(repoName);

		return res.json(settings);
	} catch (err) {
		next(ErrorHandler.internalError('Could not save settings!'));
	}
};

export const deleteSettings = async (
	_: Request,
	res: Response<{ message: string }>,
	next: NextFunction
): Promise<Response<{ message: string }> | undefined> => {
	try {
		await settingServices.deleteSettings();

		return res.json({ message: 'Settings deleted successfully' });
	} catch (err) {
		next(ErrorHandler.internalError('Something went wrong!'));
	}
};
