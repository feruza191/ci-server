import { createAsyncThunk } from '@reduxjs/toolkit';
import { message } from 'antd';

import endpoint from 'client/endpoint';

interface SettingsArgs {
	repoName: string;
	mainBranch: string;
	period: number;
}
export const getSettings = createAsyncThunk(
	'settings/getSettings',
	async () => {
		try {
			const { data } = await endpoint.get('/api/settings');

			return data;
		} catch (error) {
			message.error(error.response.data);
		}
	}
);

export const saveSettings = createAsyncThunk(
	'settings/saveSettings',
	async ({ repoName, mainBranch, period }: SettingsArgs) => {
		try {
			const { data } = await endpoint.post('/api/settings', {
				repoName,
				mainBranch,
				period,
			});

			message.success('Settings saved');

			return data;
		} catch (error) {
			message.error(error.response.data);
		}
	}
);
