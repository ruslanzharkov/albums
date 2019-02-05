import { combineReducers } from 'redux';
import * as posts from './posts';

const reducers = combineReducers({
    ...posts,
});

export default reducers;
