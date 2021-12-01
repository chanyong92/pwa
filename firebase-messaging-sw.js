importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');

const config =  { 
    apiKey: "AIzaSyBMcxOHjmAoSOvdeLuV2nbJmyPXS9wdY80",
    authDomain: "seating-pwa.firebaseapp.com",
    projectId: "seating-pwa",
    storageBucket: "seating-pwa.appspot.com",
    messagingSenderId: "14701710055",
    appId: "1:14701710055:web:d22f12c13f8b054d59f042",
    measurementId: "G-PY2Z1KS3H3"
}; 
firebase.initializeApp(config);

const messaging = firebase.messaging()