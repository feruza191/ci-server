import { takeLatest } from 'redux-saga/effects';

import {
	ADD_JOB,
	GET_ALL_JOBS,
	GET_JOB,
	GET_SETTINGS,
	SAVE_SETTINGS,
} from '../actions/actionTypes';
import {
	handleAddJob,
	handleGetAllJobs,
	handleGetJob,
} from '../handlers/jobs.handler';
import {
	handleGetSettings,
	handleSaveSettings,
} from '../handlers/settings.handler';

export function* watcherSaga() {
	yield takeLatest(GET_ALL_JOBS, handleGetAllJobs);
	yield takeLatest(GET_SETTINGS, handleGetSettings);
	yield takeLatest(SAVE_SETTINGS, handleSaveSettings);
	yield takeLatest(GET_JOB, handleGetJob);
	yield takeLatest(ADD_JOB, handleAddJob);
}
