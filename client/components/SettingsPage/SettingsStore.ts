import { makeObservable, observable, action } from 'mobx';
import { createContext } from 'react';
import { message } from 'antd';

import endpoint from 'client/endpoint';

interface SettingsItem {
	id: string;
	repoName: string;
	mainBranch: string;
	period: number;
}

export class SettingsStoreImp {
	settings: SettingsItem;

	constructor() {
		makeObservable(this, {
			settings: observable.ref,
			getSettings: action,
		});
	}

	async getSettings(): Promise<void> {
		try {
			const res = await endpoint.get('/api/settings');

			this.settings = res.data;
		} catch (error) {
			message.error(error.response.data);
		}
	}

	async saveSettings(
		repoName: string,
		mainBranch: string,
		period: number
	): Promise<void> {
		try {
			const res = await endpoint.post('/api/settings', {
				repoName,
				mainBranch,
				period,
			});

			this.settings = res.data;
			message.success('Settings saved');
		} catch (error) {
			message.error(error.response.data);
		}
	}
}

export const SettingsContext = createContext(new SettingsStoreImp());
