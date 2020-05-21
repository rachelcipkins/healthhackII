const firebase = require('firebase/app');
require("firebase/auth");
require("firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyCvXjmpC8ont2APsb3axHuGr1K5wrPIRww",
    authDomain: "level-ff234.firebaseapp.com",
    databaseURL: "https://level-ff234.firebaseio.com",
    projectId: "level-ff234",
    storageBucket: "level-ff234.appspot.com",
    messagingSenderId: "539108081164",
    appId: "1:539108081164:web:09d7033c49c0e0ea827829",
    measurementId: "G-EF4GGHFXRG"
};

firebase.initializeApp(firebaseConfig);

var email = document.getElementById('inputEmail').value;
var password = document.getElementById('inputPassword').value;

if (email.length < 4) {
    alert('Please enter an email address.');
    return;
}
if (password.length < 4) {
    alert('Please enter a password.');
    return;
}

firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage);
});

firebase.auth().signOut().then(function() {
    // Sign-out successful.
    console.log("Sign out success.");
  }).catch(function(error) {
    // An error happened.
    console.log(error);
});