/* eslint-disable no-console */
import { getRepository } from 'typeorm';

import { Settings } from './settings.entity';

export class SettingsService {
	public async getSettings(): Promise<Settings | void> {
		try {
			const settingRepository = getRepository(Settings);

			const settings = await settingRepository.findOne();

			return settings;
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
				console.log('here');
				const settings = settingRepository.create({
					repoName,
					mainBranch,
					period,
				});

				return settingRepository.save(settings);
			}

			const { id } = currentSettings;

			settingRepository.update(id, {
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
}
