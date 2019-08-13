import * as actionTypes from '../constants/actions';

export function setLoading(dispatch) {
    dispatch({
        type: actionTypes.SET_LOADING
    });
}

export function stopLoading(dispatch) {
    dispatch({
        type: actionTypes.STOP_LOADING
    });
}
