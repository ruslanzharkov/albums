import * as actionTypes from '../constants/actions';

export const currentUser = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.GET_CURRENT_USER:
            return action.payload;
        default:
            return state;
    }
};
