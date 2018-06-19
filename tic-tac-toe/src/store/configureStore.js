import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from './reducers';
import rootSaga from './sagas';

export const configureStore = (initialState = {}, history) => {
	const sagaMiddleware = createSagaMiddleware();
	const middleware = [routerMiddleware(history), sagaMiddleware];

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
	
	sagaMiddleware.run(rootSaga);
	
	return store;
};
