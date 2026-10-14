// js/firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDeMZAr7kHwg3bdJYyRh05zKvm4EK2nwEM",
  authDomain: "garuto-387ff.firebaseapp.com",
  projectId: "garuto-387ff",
  storageBucket: "garuto-387ff.firebasestorage.app",
  messagingSenderId: "583904001503",
  appId: "1:583904001503:web:953f38e98e564d63ef986a",
  measurementId: "G-D1NR0W0QQ2"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
