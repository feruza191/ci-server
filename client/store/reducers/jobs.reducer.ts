import { JobStatus } from 'client/core/enums/JobStatus';
import { JobItem } from 'client/types/types';
import { SET_ADD_JOB, SET_ALL_JOBS, SET_JOB } from '../actions/actionTypes';

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

export const jobsReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_ALL_JOBS: {
			const { jobs } = action;
			return { ...state, jobs };
		}
		case SET_JOB: {
			const { job } = action;
			return { ...state, job };
		}
		case SET_ADD_JOB: {
			const { job } = action;
			return { ...state, job };
		}
		default:
			return state;
	}
};
