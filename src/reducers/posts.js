import * as actionTypes from '../constants/actions';

const posts = (state = [], action) => {
    switch (action.type) {
        case actionTypes.GET_POSTS:
            return action.payload;
        default: 
            return state;
    }
};

export default posts;
