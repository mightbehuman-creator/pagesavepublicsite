// the problem with this is that this file had to be in the root be default
// we have to change it https://stackoverflow.com/questions/41659970/firebase-change-the-location-of-the-service-worker


// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/8.4.3/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.4.3/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
const firebaseConfig = {
    apiKey: "AIzaSyCTKDCCVasMozc94FO9WexvvBkvHaXrn-w",
    authDomain: "page-save.firebaseapp.com",
    databaseURL: "https://page-save-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "page-save",
    storageBucket: "page-save.appspot.com",
    messagingSenderId: "191537973535",
    appId: "1:191537973535:web:e9521da8ba973166a8082a",
    measurementId: "G-HX28BXHXWD"
};

firebase.initializeApp(firebaseConfig);


// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
// Handle incoming messages. Called when:
// - a message is received while the app has focus
// - the user clicks on an app notification created by a service worker
//   `messaging.onBackgroundMessage` handler.
// messaging.onMessage(function (payload) {
//     console.log('Message received. ', payload);
// });

messaging.onBackgroundMessage((payload) => {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
    // const notificationTitle = 'Background Message Title';
    // const notificationOptions = {
    //     body: 'Background Message body.',
    //     icon: '/firebase-logo.png'
    // };

    // self.registration.showNotification(notificationTitle,
    //     notificationOptions);
});