import { configureStore } from '@reduxjs/toolkit';

import { jobsReducer } from './reducers/jobs.reducer';
import { settingsReducer } from './reducers/settings.reducer';

export const store = configureStore({
	reducer: {
		jobs: jobsReducer,
		settings: settingsReducer,
	},
	devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
