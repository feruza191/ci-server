import { createAsyncThunk } from '@reduxjs/toolkit';
import { message } from 'antd';

import endpoint from 'client/endpoint';

interface AddJobArgs {
	commitHash: string;
	buildCommand: string;
}

export const fetchJobs = createAsyncThunk('jobs/fetchJobs', async () => {
	try {
		const { data } = await endpoint.get('/api/jobs');

		return data;
	} catch (error) {
		message.error(error.response.data);
	}
});

export const fetchJob = createAsyncThunk(
	'job/fetchJob',
	async (jobId: string) => {
		try {
			const { data } = await endpoint.get(`/api/jobs/${jobId}`);

			return data;
		} catch (error) {
			message.error(error.response.data);
		}
	}
);

export const fetchAddJob = createAsyncThunk(
	'job/fetchAddJob',
	async ({ commitHash, buildCommand }: AddJobArgs) => {
		try {
			const { data } = await endpoint.post(`/api/jobs/${commitHash}`, {
				buildCommand,
			});

			return data;
		} catch (error) {
			message.error(error.response.data);
		}
	}
);

// export const getJobs = createAction('getJobs');
