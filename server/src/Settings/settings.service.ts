/* eslint-disable no-console */
import { getRepository, Repository } from 'typeorm';

import { Settings } from './settings.entity';

export class SettingsService {
	private settingRepository: Repository<Settings>;

	public async getAllSettings(): Promise<Settings[] | void> {
		try {
			const settingRepository = getRepository(Settings);

			return await settingRepository.find();
		} catch (e) {
			throw Error('Could not retrieved all settings!');
		}
	}

	public async saveAllSettings(
		repoName: string,
		mainBranch: string,
		period: number
	): Promise<Settings | void> {
		try {
			const settingRepository = getRepository(Settings);

			const settings = settingRepository.create({
				repoName,
				mainBranch,
				period,
			});

			return settingRepository.save(settings);
		} catch (e) {
			throw Error('Could not save settings!');
		}
	}
}
