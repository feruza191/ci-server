import { createReducer } from '@reduxjs/toolkit';

import { RequestStatus } from 'client/core/enums/RequestStatus';
import { SettingsItem } from 'client/types/types';
import { getSettings, saveSettings } from '../actions/settings.actions';

interface SettingsState {
	loading: string | null;
	settings: SettingsItem;
}

const initialState: SettingsState = {
	loading: null,
	settings: {
		id: '',
		repoName: '',
		mainBranch: '',
		period: 0,
	},
};

export const settingsReducer = createReducer(initialState, (builder) => {
	builder
		.addCase(getSettings.pending, (state) => {
			state.loading = RequestStatus.Pending;
		})
		.addCase(getSettings.fulfilled, (state, action) => {
			state.loading = RequestStatus.Fulfilled;
			state.settings = action.payload;
		})
		.addCase(getSettings.rejected, (state) => {
			state.loading = RequestStatus.Rejected;
		});
	builder
		.addCase(saveSettings.pending, (state) => {
			state.loading = RequestStatus.Pending;
		})
		.addCase(saveSettings.fulfilled, (state, action) => {
			state.loading = RequestStatus.Fulfilled;
			state.settings = action.payload;
		})
		.addCase(saveSettings.rejected, (state) => {
			state.loading = RequestStatus.Rejected;
		});
});
