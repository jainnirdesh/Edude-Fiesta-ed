# 🔥 Firebase Setup Guide for EDUDE FIESTA

## Step 1: Create Firestore Database

1. Go to [Firebase Console](https://console.firebase.google.com/project/edudefiesta-73647)
2. In the left sidebar, click **"Firestore Database"**
3. Click **"Create database"**
4. Choose **"Start in test mode"** (for now)
5. Select a location (choose one close to your users, e.g., asia-south1 for India)
6. Click **"Done"**

## Step 2: Set Security Rules (Temporary - for testing)

1. In Firestore Database, go to **"Rules"** tab
2. Replace the existing rules with:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if true;
    }
  }
}
```

3. Click **"Publish"**

## Step 3: Enable Firebase App (if needed)

1. Go to **"Project Overview"** in Firebase Console
2. If you see any warnings about the app not being registered, click on the web app icon
3. Make sure your app is properly registered

## Step 4: Verify Environment Variables in Vercel

Make sure these are set in your Vercel project settings:

```
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyAGTwzIUs4G7SNl_Ec-VIj6zD_-lmZjCSQ
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=edudefiesta-73647.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=edudefiesta-73647
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=edudefiesta-73647.firebasestorage.app
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=529387538752
NEXT_PUBLIC_FIREBASE_APP_ID=1:529387538752:web:1c00d307348ac14f3d52a5
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=G-7WNS4T2DZH
```

## Step 5: Test Locally

After setting up Firestore:
1. Restart your development server
2. Open browser console
3. Submit the contact form
4. Check if data appears in Firebase Console under Firestore Database

## Common Issues:

- **403 Permission Denied**: Firestore database not created or wrong security rules
- **404 App not found**: App not properly registered in Firebase Console
- **Missing env vars**: Environment variables not set in Vercel

## After Testing:

Once everything works, update Firestore security rules for production:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /contactMessages/{document} {
      allow write: if true; // Allow anyone to write contact messages
      allow read: if false; // Don't allow reading
    }
    match /newsletterSubscriptions/{document} {
      allow write: if true; // Allow anyone to subscribe
      allow read: if false; // Don't allow reading
    }
  }
}
```
