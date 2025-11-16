// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};

// Validate Firebase configuration
if (!firebaseConfig.apiKey || !firebaseConfig.projectId) {
  console.error('Firebase configuration is missing. Please check your environment variables.');
  console.log('Required env vars:', {
    apiKey: !!firebaseConfig.apiKey,
    projectId: !!firebaseConfig.projectId,
    authDomain: !!firebaseConfig.authDomain,
    appId: !!firebaseConfig.appId
  });
}

// Initialize Firebase
let app;
let analytics;
let db;

try {
  app = initializeApp(firebaseConfig);
  
  // Initialize Firestore
  db = getFirestore(app);
  
  // Initialize Analytics (only on client side and if measurementId exists)
  if (typeof window !== 'undefined' && firebaseConfig.measurementId) {
    try {
      analytics = getAnalytics(app);
      console.log('Firebase Analytics initialized successfully');
    } catch (analyticsError) {
      console.warn('Firebase Analytics failed to initialize:', analyticsError);
    }
  }
  
  console.log('Firebase initialized successfully');
} catch (error) {
  console.error('Firebase initialization failed:', error);
}

export { app, analytics, db };
