import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey:  "AIzaSyB5bgsv6wPrnVEXeEXpMUpe0q0DLhLIGvQ",
  authDomain: "cv-generator-fb87b.firebaseapp.com",
  projectId: "cv-generator-fb87b",
  storageBucket: "cv-generator-fb87b.appspot.com",
  messagingSenderId: "420983518281",
  appId: "1:420983518281:web:e5c8aae8e82cc43473fb98",
  measurementId: "G-KYG1FTTXV9"
};

// Initialize Firebase  "gs://my-custom-bucket"
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage(app);;
const analytics = getAnalytics(app);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);