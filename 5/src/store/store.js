import {createStore, applyMiddleware, compose} from "redux";
import rootReducer from './reducers';
import logger from '../middleware/logger';

export default function configureStore(initialStore) {
	const middlewares = [logger];
	const middlewareEnhancers = applyMiddleware(...middlewares);
	const enhancers = [middlewareEnhancers];


	const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f;
	const composedEnhancers = compose(...enhancers, reduxDevTools);
	return createStore(
		rootReducer,
		initialStore,
		composedEnhancers,
		//compose( /*for redux devtools */
		//	applyMiddleWare(thunk, reduxImmutableStoreInvariant()),
		//)
	);
};
