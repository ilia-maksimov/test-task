import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { rootReducer } from './reducers';

export const configureStore = (initialState = {}, history) => {
	const middleware = [routerMiddleware(history)];

	const composeEnhancers = process.env.NODE_ENV !== 'production'
		&& (window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		? (window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
		: compose;

	const enhancer = composeEnhancers(applyMiddleware(...middleware));

	const store = createStore(
		rootReducer,
		initialState,
		enhancer
  );
  
	return store;
};
