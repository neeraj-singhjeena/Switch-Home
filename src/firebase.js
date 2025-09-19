import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBl8e_LI_Giwb9PxjJNnM93KHvBU7iYBZU",
  authDomain: "switch-home-597c0.firebaseapp.com",
  projectId: "switch-home-597c0",
  storageBucket: "switch-home-597c0.firebasestorage.app",
  messagingSenderId: "244162760080",
  appId: "1:244162760080:web:2539df4d5d0330bc91b715",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
