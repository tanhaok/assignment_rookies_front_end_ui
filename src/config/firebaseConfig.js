// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_IpT6Suu9Ukei5LwlMI-CMossYPXTr8c",
  authDomain: "assignment-upload-images.firebaseapp.com",
  projectId: "assignment-upload-images",
  storageBucket: "assignment-upload-images.appspot.com",
  messagingSenderId: "1060002612702",
  appId: "1:1060002612702:web:28992deea7eca97022894f",
  measurementId: "G-87LY9QRZNP",
};

// Initialize Firebase
// const analytics = getAnalytics(app);

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export default storage;
