import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Configuración de Firebase (mismas credenciales del CMS)
const firebaseConfig = {
  apiKey: "AIzaSyBsrNf2NfWLgVIwu7usdR0YmNAOTrBjxD4",
  authDomain: "wwses-b764c.firebaseapp.com",
  projectId: "wwses-b764c",
  storageBucket: "wwses-b764c.firebasestorage.app",
  messagingSenderId: "713081635458",
  appId: "1:713081635458:web:d27091c98864ddb7a32a9b"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Exportar Firestore
export const db = getFirestore(app);

