import firebase from 'firebase';
require('@firebase/firestore');

var firebaseConfig = {
    apiKey: "AIzaSyD7DzHvu4yTgAjghyz6gUkEvTgj4fMI3W0",
    authDomain: "booksanta-87f73.firebaseapp.com",
    databaseURL: "https://booksanta-87f73.firebaseio.com",
    projectId: "booksanta-87f73",
    storageBucket: "booksanta-87f73.appspot.com",
    messagingSenderId: "686157213546",
    appId: "1:686157213546:web:a2b6cad37880313be67f13"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  export default firebase.firestore();