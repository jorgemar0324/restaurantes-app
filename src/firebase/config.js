

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB8Kt1zB9Ljr-Y3pQ8gCDkWze7wUnng9Po",
  authDomain: "restaurant-app-db6b7.firebaseapp.com",
  projectId: "restaurant-app-db6b7",
  storageBucket: "restaurant-app-db6b7.firebasestorage.app",
  messagingSenderId: "260922225614",
  appId: "1:260922225614:web:ff2bc8b58b86ab163b319f"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };  

