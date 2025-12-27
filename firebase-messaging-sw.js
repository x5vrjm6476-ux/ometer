// Firebase Messaging SW (background push)
// IMPORTANT: Works only after you finish FCM setup + VAPID key + server sending.

importScripts("https://www.gstatic.com/firebasejs/10.12.5/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.12.5/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyBHSyx9ks_iUroCu2bnx231cpIDrY-p7sM",
  authDomain: "ometer-4cfd8.firebaseapp.com",
  projectId: "ometer-4cfd8",
  storageBucket: "ometer-4cfd8.firebasestorage.app",
  messagingSenderId: "42931867142",
  appId: "1:42931867142:web:7834e359d38949fe897d87",
  measurementId: "G-FZHWRWK717"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const title = (payload.notification && payload.notification.title) || "FitCheck";
  const body  = (payload.notification && payload.notification.body)  || "Update";
  self.registration.showNotification(title, {
    body,
    icon: "./icon-192.png",
    badge: "./icon-192.png"
  });
});