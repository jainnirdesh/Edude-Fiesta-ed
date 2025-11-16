// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGTwzIUs4G7SNl_Ec-VIj6zD_-lmZjCSQ",
  authDomain: "edudefiesta-73647.firebaseapp.com",
  projectId: "edudefiesta-73647",
  storageBucket: "edudefiesta-73647.firebasestorage.app",
  messagingSenderId: "529387538752",
  appId: "1:529387538752:web:1c00d307348ac14f3d52a5",
  measurementId: "G-7WNS4T2DZH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics (only on client side)
let analytics;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

// Initialize Firestore
const db = getFirestore(app);

export { app, analytics, db };
