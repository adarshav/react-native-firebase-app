//importing firebase in our react-native app
import firebase from 'firebase';
//the below code is pasted from firebase console
//Api details
const firebaseConfig = {
    apiKey: "AIzaSyAq0YOOHYzX03cJnXlLeel4sHVRjndMmbA",
    authDomain: "myfirstproject-77b15.firebaseapp.com",
    databaseURL: "https://myfirstproject-77b15.firebaseio.com",
    projectId: "myfirstproject-77b15",
    storageBucket: "",
    messagingSenderId: "628940695854",
    appId: "1:628940695854:web:91b54a86a5ab7d1c8672bf"
  };

firebase.initializeApp(firebaseConfig)

export const f = firebase;
export const database = firebase.database();
export const auth = firebase.auth();
export const storage = firebase.storage(); 