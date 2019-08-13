import * as actionTypes from '../constants/actions';

export const isLoading = (state = [], action) => {
    switch (action.type) {
        case actionTypes.SET_LOADING:
            return true;
        case actionTypes.SIGN_UP_SUCCESS:
            return false;
        default:
            return false;
    }
};
