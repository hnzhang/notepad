import {createStore} from "redux";
import rootReducer from './reducers';
//import reduxImmutableStoreInvariant from 'redux-immutable-state-invariant';
//import thunk from 'redux-thunk';

export default function configureStore(initialStore) {
	return createStore(
		rootReducer,
		initialStore,
		//compose( /*for redux devtools */
		//	applyMiddleWare(thunk, reduxImmutableStoreInvariant()),
			window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
		//)
	);
};
