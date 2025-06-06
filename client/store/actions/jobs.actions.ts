import { ActionReturn, JobItem } from 'client/types/types';
import {
	ADD_JOB,
	GET_ALL_JOBS,
	GET_JOB,
	SET_ADD_JOB,
	SET_ALL_JOBS,
	SET_JOB,
} from './actionTypes';

interface JobsReturn {
	jobs: JobItem[];
	type: string;
}

interface JobReturn {
	job: JobItem;
	type: string;
}

export const getAllJobs = (): ActionReturn => {
	return {
		type: GET_ALL_JOBS,
	};
};
export const setAllJobs = (jobs: JobItem[]): JobsReturn => {
	return {
		type: SET_ALL_JOBS,
		jobs,
	};
};

export const getJobAction = (jobId: string) => {
	return {
		type: GET_JOB,
		jobId,
	};
};
export const setJob = (job: JobItem): JobReturn => {
	return {
		type: SET_JOB,
		job,
	};
};

export const addJob = (commitHash: string, buildCommand: string) => {
	return {
		type: ADD_JOB,
		payload: {
			commitHash,
			buildCommand,
		},
	};
};
export const setAddJob = (job: JobItem): JobReturn => {
	return {
		type: SET_ADD_JOB,
		job,
	};
};
