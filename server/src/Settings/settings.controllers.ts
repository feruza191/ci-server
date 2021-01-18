/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import { Settings } from './settings.entity';

export const getSettings = async (_: Request, res: Response) => {
	try {
		const settingRepository = getRepository(Settings);
		const settings = await settingRepository.find();

		return res.json(settings);
	} catch (err) {
		// eslint-disable-next-line no-console
		console.log(err);
		return res.status(500).json({ error: 'Something went wrong' });
	}
};

export const saveSettings = async (req: Request, res: Response) => {
	const { repoName, mainBranch, period } = req.body;

	try {
		const settingRepository = getRepository(Settings);

		const settings = settingRepository.create({
			repoName,
			mainBranch,
			period,
		});

		await settingRepository.save(settings);

		return res.status(201).json(settings);
	} catch (err) {
		// eslint-disable-next-line no-console
		console.log(err);
		return res.status(500).json(err);
	}
};
