import * as actionTypes from '../constants/actions';

export const getPosts = () => {
    console.log('runned!')
    return dispatch => {
        dispatch({
            type: actionTypes.GET_POSTS,
            payload: [{name: '1 posts'}]
        });
    };
};
