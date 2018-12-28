import { combineReducers } from 'redux';
import postsReducer from './posts';
import navReducer from './navReducer';

const reducers = combineReducers({
    posts: postsReducer,
    nav: navReducer, 
});

export default reducers;
