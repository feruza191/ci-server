/* eslint-disable no-console */
import { getRepository } from 'typeorm';

import { Settings } from './settings.entity';

export class SettingsService {
	public async getSettings(): Promise<Settings | void> {
		try {
			const settingRepository = getRepository(Settings);

			return await settingRepository.findOne();
		} catch (e) {
			throw Error('Could not retrieved all settings!');
		}
	}

	public async saveSettings(
		repoName: string,
		mainBranch: string,
		period: number
	): Promise<Settings> {
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
			throw Error('Could not save settings!');
		}
	}

	public async deleteSettings(): Promise<Settings> {
		try {
			const settingRepository = getRepository(Settings);
			const settings = await settingRepository.findOneOrFail();

			return settingRepository.remove(settings);
		} catch (e) {
			throw Error('Something went wrong!');
		}
	}
}
