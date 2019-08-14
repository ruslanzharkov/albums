import * as actionTypes from '../constants/actions';
import { db } from '../config/db';
import * as systemActions from './system';

export const getPosts = () => {
    return dispatch => {
        db.ref('posts')
            .once('value', (data) => {
                const posts = [];
                const fireData = data.toJSON();

                for (let i = 0; i < fireData.length; i++) {
                    if (fireData[i] !== null) {
                        posts.push({
                            id: i,
                            ...fireData[i]
                        });
                    }
                }

                dispatch({
                    type: actionTypes.GET_POSTS,
                    payload: [...posts]
                });
            });
    };
};

export const getPostDetails = (postDetails) => {
    return dispatch => {
        dispatch({
            type: actionTypes.GET_POST_DETAILS,
            payload: { ...postDetails }
        });
    };
};

export const addNewPost = ({ title, author, content, formattedDate, postNumber }) => {
    return async dispatch => {
        try {
            systemActions.setLoading();

            await db.ref(`posts/${postNumber}`)
                .set({
                    author,
                    title,
                    content,
                    formattedDate
                });

            dispatch({
                type: actionTypes.ADD_POST,
                payload: 'Post success added!'
            });
            systemActions.stopLoading();
        } catch (e) {
            dispatch({
                type: actionTypes.ADD_POST_ERROR,
                payload: 'Error, please try again later'
            });
        }
    };
};


export const removePost = (postId) => {
    try {
        return async dispatch => {
            await db.ref(`posts/${postId}`)
                .remove();
        };
    } catch (e) {

    }
};
