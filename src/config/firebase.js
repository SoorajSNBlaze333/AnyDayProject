import firebase from 'firebase';
const config = {
    apiKey: "AIzaSyBRtcfhqjMf-NsX-KpvQJjIh6YpuZnqBWs",
    authDomain: "anydaytestdb.firebaseapp.com",
    databaseURL: "https://anydaytestdb.firebaseio.com",
    projectId: "anydaytestdb",
    storageBucket: "anydaytestdb.appspot.com",
    messagingSenderId: "168025903770"
  };
firebase.initializeApp(config);
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase ;