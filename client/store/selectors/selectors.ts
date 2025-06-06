import { JobItem, SettingsItem } from 'client/types/types';
import { RootState } from '../store';

export const getSettings = (state: RootState): SettingsItem =>
	state.settings.settings;
export const getJob = (state: RootState): JobItem => state.jobs.job;
export const getJobs = (state: RootState): JobItem[] => state.jobs.jobs;
