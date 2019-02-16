import * as actionTypes from '../constants/actions';
import {db} from '../config/db';

function setLoading(dispatch) {
    dispatch({
        type: actionTypes.SET_LOADING
    })
}

export const getPosts = () => {
    return dispatch => {
        db.ref('posts').once('value', (data) => {
            let posts = [], fireData = data.toJSON();

            for (let i = 0; i < fireData.length; i++) {
                if (fireData[i] !== null)
                    posts.push(fireData[i]);
            }

            dispatch({
                type: actionTypes.GET_POSTS,
                payload: posts
            });
        });
    };
};

export const getPostDetails = (postDetails) => {
    return dispatch => {
        dispatch({
            type: actionTypes.GET_POST_DETAILS,
            payload: {...postDetails}
        });
    };
};

export const addNewPost = ({title, author, content, date}) => {
    return dispatch => {
        // TODO: add loading dispatch for user
        db.ref('posts/1').set({
            ...author,
            ...title,
            ...content,
            ...date
        })
            .then(() => {
                dispatch({
                    type: actionTypes.ADD_POST,
                    payload: 'Post success added!'
                });
            })
            .catch((err) => {
                dispatch({
                    type: actionTypes.ADD_POST_ERROR,
                    payload: 'Error, please try again later'
                });
            });
    };
};
