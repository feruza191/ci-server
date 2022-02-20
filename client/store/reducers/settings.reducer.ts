import { SettingsItem } from 'client/types/types';
import { SET_SAVE_SETTINGS, SET_SETTINGS } from '../actions/actionTypes';

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

export const settingsReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_SETTINGS: {
			const { settings } = action;
			return { ...state, settings };
		}
		case SET_SAVE_SETTINGS: {
			const { settings } = action;
			return { ...state, settings };
		}
		default:
			return state;
	}
};
