import { combineReducers } from 'redux';
import * as posts from './posts';
import * as loading from './loading';
import * as user from './user';

const reducers = combineReducers({
    ...posts,
    ...loading,
    ...user
});

export default reducers;
