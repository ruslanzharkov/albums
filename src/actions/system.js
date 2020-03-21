import * as actionTypes from '../constants/actions';

export const setLoading = () => {
    return dispatch => {
        dispatch({
            type: actionTypes.SET_LOADING
        });
    };
};

export const stopLoading = () => {
    return dispatch => {
        dispatch({
            type: actionTypes.STOP_LOADING
        });
    }
}
