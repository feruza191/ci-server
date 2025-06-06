import { ActionReturn, SettingsItem } from 'client/types/types';
import {
	GET_SETTINGS,
	SAVE_SETTINGS,
	SET_SAVE_SETTINGS,
	SET_SETTINGS,
} from './actionTypes';

interface SettingsReturn {
	type: string;
	settings: SettingsItem;
}

export const getAllSettings = (): ActionReturn => {
	return {
		type: GET_SETTINGS,
	};
};
export const setSettings = (settings: SettingsItem): SettingsReturn => {
	return {
		type: SET_SETTINGS,
		settings,
	};
};

export const saveSettings = ({ repoName, mainBranch, period }) => {
	return {
		type: SAVE_SETTINGS,
		payload: {
			repoName,
			mainBranch,
			period,
		},
	};
};
export const setSaveSettings = (settings: SettingsItem): SettingsReturn => {
	return {
		type: SET_SAVE_SETTINGS,
		settings,
	};
};
