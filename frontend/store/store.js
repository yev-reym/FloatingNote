import {createStore, applyMiddleware} from 'redux';
import RootReducer from '../reducers/root';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const middlewares = [thunk];

if (process.env.NODE_ENV !== 'production') {
    middlewares.push(logger);
}

const configureStore = (preloadedState={}) => (
    createStore(RootReducer,preloadedState,applyMiddleware(...middlewares))
);

export default configureStore;


