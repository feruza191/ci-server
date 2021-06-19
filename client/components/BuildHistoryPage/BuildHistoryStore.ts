import { makeObservable, observable, action } from 'mobx';
import { createContext } from 'react';
import { message } from 'antd';

import { JobStatus } from 'client/core/enums/JobStatus';
import endpoint from '../../endpoint';

interface JobsItem {
	id: string;
	jobNumber: number;
	commitMessage: string;
	commitHash: string;
	branchName: string;
	status: JobStatus;
	start: string | null;
	finish: string | null;
	duration: number | null;
	jobLogs: string | null;
	buildCommand: string;
}

export class BuildHistoryStore {
	jobs: JobsItem[];

	job: JobsItem;

	constructor() {
		makeObservable(this, {
			jobs: observable.ref,
			job: observable.ref,
			getJobs: action,
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

			this.job = res.data;
		} catch (error) {
			message.error(error.response.data);
		}
	}
}

export const BuildHistoryContext = createContext(new BuildHistoryStore());
