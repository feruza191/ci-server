import { makeObservable, observable, action } from 'mobx';
import { createContext } from 'react';
import { message } from 'antd';

import { JobStatus } from 'client/core/enums/JobStatus';
import endpoint from '../../endpoint';

interface JobItem {
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
	authorName: string | null;
	buildCommand: string;
}

export class BuildDetailsStore {
	job: JobItem;

	constructor() {
		makeObservable(this, {
			job: observable.ref,
			getJob: action,
		});
	}

	async getJob(jobId: string): Promise<void> {
		try {
			const res = await endpoint.get(`/api/jobs/${jobId}`);

			this.job = res.data;
		} catch (error) {
			message.error(error.response.data);
		}
	}
}

export const BuildDetailsContext = createContext(new BuildDetailsStore());
