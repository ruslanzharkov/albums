import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';


const configureStore = (initalState) => {
    return createStore(
        reducers,
        initalState,
        applyMiddleware(thunk)
    );
};

export const store = configureStore({});
