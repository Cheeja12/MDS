import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBlpTH3NICiU5nTWDkINDp4rJ52PN8ZVZc",
  authDomain: "medicinedispensingsystem.firebaseapp.com",
  projectId: "medicinedispensingsystem",
  storageBucket: "medicinedispensingsystem.appspot.com",
  messagingSenderId: "912710159170",
  appId: "1:912710159170:web:c4f4a6b6b07a83c719d6db"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider, signInWithPopup, signOut };
