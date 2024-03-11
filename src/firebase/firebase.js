import { initializeApp } from "firebase/app";
//configuracion firebase
const firebaseConfig = {
  apiKey: import.meta.env.API_KEY,
  authDomain: import.meta.env.VITE_AUTH,
  projectId: import.meta.env.VITE_PROYECT_ID,
  storageBucket: import.meta.env.VITE_STORE,
  messagingSenderId: import.meta.env.VITE_MESSA,
  appId: import.meta.env.VITE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
