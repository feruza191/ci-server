/* eslint-disable no-console */
import { getRepository, Repository } from 'typeorm';

import { Settings } from './settings.entity';

export class SettingsServices {
	private settingRepository: Repository<Settings>;

	public async getAllSettings(): Promise<Settings[] | void> {
		try {
			this.settingRepository = getRepository(Settings);

			const settings = await this.settingRepository.find();
			return settings;
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
			this.settingRepository = getRepository(Settings);

			const settings = this.settingRepository.create({
				repoName,
				mainBranch,
				period,
			});

			return await this.settingRepository.save(settings);
		} catch (e) {
			throw Error('Could not save settings!');
		}
	}
}
