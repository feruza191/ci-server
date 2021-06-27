import { makeObservable, observable, action, runInAction } from 'mobx';
import { createContext } from 'react';
import { message } from 'antd';

import { JobItem } from 'client/types/types';
import endpoint from '../../endpoint';

interface SettingsItem {
	id: string;
	repoName: string;
	mainBranch: string;
	period: number;
}

export class Store {
	jobs: JobItem[];

	job: JobItem;

	settings: SettingsItem;

	constructor() {
		makeObservable(this, {
			jobs: observable.ref,
			job: observable.ref,
			settings: observable.ref,
			getSettings: action,
			saveSettings: action,
			getJobs: action,
			getJob: action,
			addJob: action,
		});
	}

	async getJobs(): Promise<void> {
		try {
			const res = await endpoint.get('/api/jobs');

			this.jobs = res.data;
		} catch (error) {
			message.error(error.response.data);
		}
	}

	async addJob(commitHash: string, buildCommand: string): Promise<void> {
		try {
			const res = await endpoint.post(`/api/jobs/${commitHash}`, {
				buildCommand,
			});
			runInAction(() => {
				this.job = res.data;
			});
		} catch (error) {
			message.error(error.response.data);
		}
	}

	async getJob(jobId: string): Promise<void> {
		try {
			const res = await endpoint.get(`/api/jobs/${jobId}`);

			runInAction(() => {
				this.job = res.data; // it is need to be wrapped in runInAction, cause comp will be rendered only once
				// if there is no runInAction, then it will be triggered 2 times if there is 2 definishion of the data
			});
		} catch (error) {
			message.error(error.response.data);
		}
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
			runInAction(() => {
				this.settings = res.data;
			});
			message.success('Settings saved');
		} catch (error) {
			message.error(error.response.data);
		}
	}
}

export const StoreContext = createContext(new Store());
