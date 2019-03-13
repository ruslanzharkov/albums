import firebase from 'react-native-firebase';
import {AsyncStorage} from 'react-native';
import * as actionTypes from '../constants/actions';

export const signUp = ({email, password}) => {
    return async dispatch => {
        dispatch({
            type: actionTypes.SET_LOADING
        });

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch((error) => {
                dispatch({
                    type: actionTypes.SET_ERROR,
                    payload: error.message
                });
            });

        await AsyncStorage.setItem('userToken', password);

        dispatch({
            type: actionTypes.SIGN_UP_SUCCESS,
            payload: ''
        });
    };
};

export const signIn = ({email, password}) => {
    return async dispatch => {
        dispatch({
            type: actionTypes.SET_LOADING
        });
        let error = '';

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch((error) => {
                error = error.message;
                console.log(error.message)
                dispatch({
                    type: actionTypes.SET_ERROR,
                    payload: error.message
                });
            });

        if (!error) {
            await AsyncStorage.setItem('userToken', password);

            dispatch({
                type: actionTypes.SIGN_IN_SUCCESS,
                payload: ''
            });
        }

    };
};


export const getCurrentUser = () => {
    return async dispatch => {
        const user = await firebase.auth().currentUser;

        dispatch({
            type: actionTypes.GET_CURRENT_USER,
            payload: user._user
        });
    };
};


export const logoutFromApp = () => {
    return async dispatch => {
        dispatch({
            type: actionTypes.SET_LOADING
        });

        try {
            await AsyncStorage.removeItem('userToken');
            firebase.auth().signOut().then(function () {
                dispatch({
                    type: actionTypes.LOGOUT_SUCCESS,
                    payload: ''
                });
            }).catch((error) => {
                // An error happened.
            });
        } catch (e) {
            dispatch({
                type: actionTypes.SET_ERROR,
                payload: e.message
            });
        }
    };
};
