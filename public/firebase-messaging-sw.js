importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js"
);

// Initialize the Firebase app in the service worker by passing in the messagingSenderId.
const firebaseConfig = {
  apiKey: "AIzaSyAGn5FGNu5vV8yTc_sMgp61wK86gtQXRTc",
  authDomain: "smarts-next-pwa.firebaseapp.co",
  projectId: "smarts-next-pwa",
  storageBucket: "smarts-next-pwa.firebasestorage.app",
  messagingSenderId: "545017091933",
  appId: "1:545017091933:web:6ec64e6cf90f7853e7bab4",
  measurementId: "G-NNJ214WV5M",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Retrieve an instance of Firebase Messaging so that it can handle background messages.
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  // Customize notification here
  const notificationTitle = "Background Message Title";
  const notificationOptions = {
    title: payload?.notification?.title,
    body: payload?.notification.body,
    icon: "/firebase.png",
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});
