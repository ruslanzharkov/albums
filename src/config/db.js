import firebase from 'react-native-firebase';

const config = {  
    apiKey: '',
    authDomain: '',
    databaseURL: '',
    storageBucket: '',
};

const app = firebase.initializeApp(config);  
export const db = app.database();
