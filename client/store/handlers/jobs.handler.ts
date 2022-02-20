import { message } from 'antd';
import { call, put } from 'redux-saga/effects';

import {
	setAddJob,
	setAllJobs,
	setJob,
} from 'client/store/actions/jobs.actions';
import {
	requestAddJob,
	requestGetAllJobs,
	requestGetJob,
} from 'client/store/requests/jobs.requests';

export function* handleGetAllJobs() {
	try {
		const { data } = yield call(requestGetAllJobs);
		yield put(setAllJobs(data));
	} catch (error) {
		message.error(error.message);
	}
}

export function* handleGetJob(action) {
	try {
		const { data } = yield call(requestGetJob, action.jobId);
		yield put(setJob(data));
	} catch (error) {
		message.error(error.message);
	}
}

export function* handleAddJob(action) {
	console.log({ action });
	try {
		const { data } = yield call(requestAddJob, action.payload);

		yield put(setAddJob(data));
	} catch (error) {
		message.error(error.message);
	}
}
