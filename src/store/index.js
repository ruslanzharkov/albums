import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducers from '../reducers';


const configureStore = (initialState) => {
    return createStore(
        reducers,
        initialState,
        applyMiddleware(thunk, logger)
    );
};

export const store = configureStore({});
