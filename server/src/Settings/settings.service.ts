/* eslint-disable no-console */
import { getRepository } from 'typeorm';

import { Settings } from './settings.entity';
import TextKeys from '../share/enums/TextKeys';
import { AppError } from '../share/appError';
import { HttpCodes } from '../share/enums/HttpCodes';

export class SettingsService {
	public async getSettings(): Promise<Settings | undefined> {
		try {
			const settingRepository = getRepository(Settings);

			return await settingRepository.findOne();
		} catch (e) {
			throw new AppError(
				TextKeys.NotRetrievedSettings,
				HttpCodes.NotFound
			);
		}
	}

	public async saveSettings(
		repoName: string,
		mainBranch: string,
		period: number
	): Promise<Settings | undefined> {
		try {
			const settingRepository = getRepository(Settings);
			const currentSettings = await this.getSettings();

			if (!currentSettings) {
				const settings = settingRepository.create({
					repoName,
					mainBranch,
					period,
				});

				return settingRepository.save(settings);
			}
			const { id } = currentSettings;

			await settingRepository.update(id, {
				repoName,
				mainBranch,
				period,
			});

			return {
				id,
				repoName,
				mainBranch,
				period,
			};
		} catch (e) {
			throw new AppError(
				TextKeys.FailedSaveSettings,
				HttpCodes.ServerError
			);
		}
	}

	public async deleteSettings(): Promise<Settings | undefined> {
		try {
			const settingRepository = getRepository(Settings);
			const settings = await settingRepository.findOneOrFail();

			return settingRepository.remove(settings);
		} catch (e) {
			throw new AppError(
				TextKeys.SomethingWentWrong,
				HttpCodes.ServerError
			);
		}
	}
}
