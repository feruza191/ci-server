import axios from 'axios';

import { BASE_URL } from 'client/constants';
import { RequestReturn } from 'client/types/types';

export function requestGetAllJobs(): Promise<RequestReturn> {
	return axios.request({
		method: 'get',
		url: `${BASE_URL}/api/jobs`,
	});
}

export function requestGetJob(jobId: string): Promise<RequestReturn> {
	return axios.request({
		method: 'get',
		url: `${BASE_URL}/api/jobs/${jobId}`,
	});
}

export function requestAddJob({
	commitHash,
	buildCommand,
}): Promise<RequestReturn> {
	return axios.request({
		method: 'post',
		url: `${BASE_URL}/api/jobs/${commitHash}`,
		data: { buildCommand },
	});
}
