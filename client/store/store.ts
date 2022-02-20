import { combineReducers, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import { jobsReducer } from './reducers/jobs.reducer';
import { settingsReducer } from './reducers/settings.reducer';
import { watcherSaga } from './redux-sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const reducer = combineReducers({
	jobs: jobsReducer,
	settings: settingsReducer,
});

export const store = createStore(
	reducer,
	composeWithDevTools(applyMiddleware(...middleware))
);

sagaMiddleware.run(watcherSaga);

export type RootState = ReturnType<typeof store.getState>;
