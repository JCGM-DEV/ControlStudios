// js/db.js
import { db } from "./firebase-config.js";
import { 
  doc, 
  setDoc, 
  getDoc, 
  serverTimestamp 
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const COLLECTION_NAME = "sesiones_estudio";

export async function guardarSesionUsuario(userId, datos) {
  const docRef = doc(db, COLLECTION_NAME, userId);
  await setDoc(docRef, {
    ...datos,
    ultimaSincronizacion: serverTimestamp()
  }, { merge: true });
}

export async function cargarSesionUsuario(userId) {
  const docRef = doc(db, COLLECTION_NAME, userId);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return docSnap.data();
  }
  return null;
}
