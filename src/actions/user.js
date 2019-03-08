import firebase from 'react-native-firebase';
import * as actionTypes from '../constants/actions';

export const signUp = ({ email, password }) => {
    return dispatch => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch( (error) => {
                // var errorCode = error.code; TODO: temporary comments
                // var errorMessage = error.message;
                dispatch({
                    type: actionTypes.SIGN_UP_ERROR,
                    payload: error.message
                });
            });

        dispatch({
            type: actionTypes.SIGN_UP_SUCCESS,
            payload: ''
        });
    };
};
