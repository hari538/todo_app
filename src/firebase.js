
import firebase from "firebase";


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBwZN-qx886Yz9QFWp_O-vhyewnHHMRI6Q",
    authDomain: "todo-app-rh.firebaseapp.com",
    databaseURL: "https://todo-app-rh.firebaseio.com",
    projectId: "todo-app-rh",
    storageBucket: "todo-app-rh.appspot.com",
    messagingSenderId: "797159811041",
    appId: "1:797159811041:web:153adf31ae7113f8cd14a0",
    measurementId: "G-NYN887201Q"

});

const db = firebaseApp.firestore();

export default db;