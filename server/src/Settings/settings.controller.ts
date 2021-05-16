import { Request, Response, NextFunction } from 'express';

import { SettingsService } from './settings.service';
import { SandboxService } from '../share/sandboxService';
import { Settings } from './settings.entity';
import { AnyObject } from '../../types/types';
import { AppError } from '../share/appError';
import { HttpCodes } from '../share/enums/HttpCodes';
import TextKeys from '../share/enums/TextKeys';

const settingServices = new SettingsService();
const sandBoxService = new SandboxService();

export const getSettings = async (
	_: Request,
	res: Response<Settings>,
	next: NextFunction
): Promise<Response<Settings> | undefined> => {
	try {
		const settings = await settingServices.getSettings();

		if (!settings) {
			throw new AppError(
				TextKeys.NotRetrievedSettings,
				HttpCodes.NotFound
			);
		}

		return res.json(settings);
	} catch (err) {
		next(err);
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

	try {
		const settings = await settingServices.saveSettings(
			repoName,
			mainBranch,
			period
		);

		if (!repoName) {
			throw new AppError(
				TextKeys.RepoNameIsRequired,
				HttpCodes.BadRequest
			);
		}

		if (!mainBranch) {
			throw new AppError(
				TextKeys.MainBranchIsRequired,
				HttpCodes.BadRequest
			);
		}

		if (!period) {
			throw new AppError(TextKeys.PeriodIsRequired, HttpCodes.BadRequest);
		}

		sandBoxService.gitClone(repoName);

		return res.json(settings);
	} catch (err) {
		next(err);
	}
};

export const deleteSettings = async (
	_: Request,
	res: Response<{ message: string }>,
	next: NextFunction
): Promise<Response<{ message: string }> | undefined> => {
	try {
		await settingServices.deleteSettings();

		return res.json({ message: TextKeys.SettingsDeletedSuccess });
	} catch (err) {
		next(err);
	}
};
