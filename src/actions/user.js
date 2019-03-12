import firebase from 'react-native-firebase';
import { AsyncStorage } from 'react-native';
import * as actionTypes from '../constants/actions';

export const signUp = ({ email, password }) => {
    return async dispatch => {
        dispatch({
            type: actionTypes.SET_LOADING
        });

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch( (error) => {
                // var errorCode = error.code; TODO: temporary comments
                // var errorMessage = error.message;
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


export const getCurrentUser = () => {
  return async dispatch => {
      let user = await firebase.auth().currentUser;
      console.log(user);
  };
};


export const logoutFromApp = () => {
    return async dispatch => {
        dispatch({
            type: actionTypes.SET_LOADING
        });

        try {
            await AsyncStorage.removeItem('userToken');
            dispatch({
                type: actionTypes.LOGOUT_SUCCESS,
                payload: ''
            });
        } catch (e) {
            dispatch({
                type: actionTypes.SET_ERROR,
                payload: e.message
            });
        }
    };
};
