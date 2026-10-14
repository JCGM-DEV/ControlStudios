// js/auth.js
import { auth } from "./firebase-config.js";
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged 
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

export async function registrarUsuario(email, password) {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  return userCredential.user;
}

export async function iniciarSesion(email, password) {
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  return userCredential.user;
}

export async function cerrarSesion() {
  return await signOut(auth);
}

export function escucharEstadoSesion(callback) {
  onAuthStateChanged(auth, (user) => {
    callback(user);
  });
}
