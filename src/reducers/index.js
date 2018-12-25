import { combineReducers } from 'redux';
import { posts } from './posts';

const reducers = combineReducers({
    posts: posts 
});

export default reducers;
