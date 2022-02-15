import { createReducer } from '@reduxjs/toolkit';

import { JobStatus } from 'client/core/enums/JobStatus';
import { RequestStatus } from 'client/core/enums/RequestStatus';
import { JobItem } from 'client/types/types';
import { fetchAddJob, fetchJob, fetchJobs } from '../actions/jobs.actions';

interface JobsState {
	loading: string | null;
	jobs: JobItem[];
	job: JobItem;
}

const initialState: JobsState = {
	loading: null,
	jobs: [],
	job: {
		id: '',
		jobNumber: 0,
		commitMessage: '',
		commitHash: '',
		branchName: '',
		status: JobStatus.Waiting,
		start: '',
		finish: '',
		duration: null,
		jobLogs: '',
		authorName: '',
		buildCommand: '',
	},
};

export const jobsReducer = createReducer(initialState, (builder) => {
	builder
		.addCase(fetchJobs.pending, (state) => {
			state.loading = RequestStatus.Pending;
		})
		.addCase(fetchJobs.fulfilled, (state, action) => {
			state.loading = RequestStatus.Fulfilled;
			state.jobs = action.payload;
		})
		.addCase(fetchJobs.rejected, (state) => {
			state.loading = RequestStatus.Rejected;
		});
	builder
		.addCase(fetchJob.pending, (state) => {
			state.loading = RequestStatus.Pending;
		})
		.addCase(fetchJob.fulfilled, (state, action) => {
			state.loading = RequestStatus.Fulfilled;
			state.job = action.payload;
		})
		.addCase(fetchJob.rejected, (state) => {
			state.loading = RequestStatus.Rejected;
		});
	builder
		.addCase(fetchAddJob.pending, (state) => {
			state.loading = RequestStatus.Pending;
		})
		.addCase(fetchAddJob.fulfilled, (state, action) => {
			state.loading = RequestStatus.Fulfilled;
			state.jobs.push(action.payload);
		})
		.addCase(fetchAddJob.rejected, (state) => {
			state.loading = RequestStatus.Rejected;
		});
});
