import firebase from 'firebase'

const firebaseConfig = {

    apiKey: "AIzaSyA7kf8qYbTykpLGOiUvkEET6DrRO8KvJOQ",
    authDomain: "linkedin-clone-99ab4.firebaseapp.com",
    projectId: "linkedin-clone-99ab4",
    storageBucket: "linkedin-clone-99ab4.appspot.com",
    messagingSenderId: "114212835716",
    appId: "1:114212835716:web:f5e5424142cd209e1ecdd1"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
