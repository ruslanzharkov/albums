import * as actionTypes from '../constants/actions';

export const posts = (state = [], action) => {
    switch (action.type) {
        case actionTypes.GET_POSTS:
            return action.payload;
        default: 
            return state;
    }
};
