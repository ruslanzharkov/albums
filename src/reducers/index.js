import { combineReducers } from 'redux';
import * as posts from './posts';
import * as loading from './loading';

const reducers = combineReducers({
    ...posts,
    ...loading
});

export default reducers;
