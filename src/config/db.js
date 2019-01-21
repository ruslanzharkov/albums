import firebase from 'react-native-firebase';

const config = {  
    apiKey: 'AIzaSyCvXyjifg2ClJZpoLe55VmSzyhWUPsv2hM',
    authDomain: 'albums-33d4f.firebaseapp.com',
    databaseURL: 'https://albums-33d4f.firebaseio.com',
    storageBucket: 'albums-33d4f.appspot.com',
};

const app = firebase.initializeApp(config);  
export const db = app.database();
