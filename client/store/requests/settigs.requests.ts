import axios from 'axios';

import { BASE_URL } from 'client/constants';
import { RequestReturn } from 'client/types/types';

export function requestGetSettings(): Promise<RequestReturn> {
	return axios.request({
		method: 'get',
		url: `${BASE_URL}/api/settings`,
	});
}

export function requestSaveSettings(body) {
	return axios.request({
		method: 'post',
		url: `${BASE_URL}/api/settings`,
		data: body,
	});
}
