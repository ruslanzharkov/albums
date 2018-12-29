import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducers from '../reducers';


const configureStore = (initalState) => {
    return createStore(
        reducers,
        initalState,
        applyMiddleware(thunk, logger)
    );
};

export const store = configureStore({});
