import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBAW0dKIG-rTRjG4c45uDY2VqKM_mzj5oU",
  authDomain: "store-907fa.firebaseapp.com",
  projectId: "store-907fa",
  storageBucket: "store-907fa.appspot.com",
  messagingSenderId: "955199201284",
  appId: "1:955199201284:web:187185ecb5362e204e5551",
  measurementId: "G-4E6GY51P5B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth  = getAuth(app)