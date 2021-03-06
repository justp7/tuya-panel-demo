import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';
import { reducers as commonReducers, epics as commonEpics } from './modules/common';
import { reducers as themeReducers } from './modules/theme';

export const rootReducers = combineReducers({
  ...commonReducers,
  ...themeReducers,
});
export type ReduxType = ReturnType<typeof rootReducers>;

const allEpics = [...commonEpics];

export const rootEpics = combineEpics(...allEpics);
