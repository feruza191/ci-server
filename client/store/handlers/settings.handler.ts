import { message } from 'antd';
import { put, call } from 'redux-saga/effects';

import { setSaveSettings, setSettings } from '../actions/settings.actions';
import {
	requestGetSettings,
	requestSaveSettings,
} from '../requests/settigs.requests';

export function* handleGetSettings() {
	try {
		const { data } = yield call(requestGetSettings);
		yield put(setSettings(data));
	} catch (error) {
		message.error(error.message);
	}
}

export function* handleSaveSettings(action) {
	try {
		const { data } = yield call(requestSaveSettings, action.payload);
		yield put(setSaveSettings(data));

		message.success('Settings saved');
	} catch (error) {
		message.error(error.message);
	}
}
