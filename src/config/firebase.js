import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth/web-extension";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOyZONbRhmFHdfO39DVV64dO2vscX_fwY",
  authDomain: "gearhead-18962.firebaseapp.com",
  projectId: "gearhead-18962",
  storageBucket: "gearhead-18962.appspot.com",
  messagingSenderId: "969884944080",
  appId: "1:969884944080:web:2df2b68549dc54201100d5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
