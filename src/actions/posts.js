import * as actionTypes from '../constants/actions';
import { db } from '../config/db';
import * as systemActions from './system';

export const getPosts = () => {
    return dispatch => {
        db.ref('posts')
            .once('value', (data) => {
                let posts = [];
                const firebasePosts = data.toJSON();

                if (Array.isArray(firebasePosts)) {
                    posts = firebaseArrayHandler(firebasePosts);
                } else {
                    posts = firebaseObjectHandler(firebasePosts);
                }

                dispatch({
                    type: actionTypes.GET_POSTS,
                    payload: [...posts]
                });
            });
    };
};

const firebaseArrayHandler = (firebasePosts) => {
    const posts = [];

    for (let i = 0; i < firebasePosts.length; i++) {
        if (firebasePosts[i] !== null) {
            posts.push({
                id: i,
                ...firebasePosts[i]
            });
        }
    }

    return [...posts];
};

const firebaseObjectHandler = (firebasePosts) => {
    const posts = [];

    for (const firebasePostKey in firebasePosts) {
        if (firebasePosts.hasOwnProperty(firebasePostKey)) {
            posts.push({
                id: firebasePostKey,
                ...firebasePosts[firebasePostKey]
            });
        }
    }

    return [...posts];
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
                payload: 'Post successfully added!'
            });
            systemActions.stopLoading();
        } catch (e) {
            console.log(e);
            dispatch({
                type: actionTypes.ADD_POST_ERROR,
                payload: 'Error, please try again later'
            });
        }
    };
};


export const removePost = async (postId) => {
    try {
        return async dispatch => {
            await db.ref(`posts/${postId}`)
                .remove();
        };
    } catch (e) {

    }
};
