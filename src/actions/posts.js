import * as actionTypes from '../constants/actions';
import { db } from '../config/db';

export const getPosts = () => {
    return dispatch => {
        db.ref('posts').once('value', (data) => {
            let posts = [], fireData = data.toJSON();
            for (let i = 0; i < fireData.length; i++)
                if (fireData[i] !== null)
                    posts.push(fireData[i]);

            dispatch({
                type: actionTypes.GET_POSTS,
                payload: posts
            });
        });
    };
};
