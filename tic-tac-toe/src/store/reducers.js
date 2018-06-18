import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { appReducer } from './../containers/app/app.reducer';

export const rootReducer = combineReducers({
	routing: routerReducer,
	appReducer
});
