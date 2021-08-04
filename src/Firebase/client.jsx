import firebase from 'firebase/app';
import '@firebase/firestore';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyDwfO3O1eSy6i53grvnqjB6tKUAfDhgfts",
    authDomain: "lola-games-e-commerce.firebaseapp.com",
    projectId: "lola-games-e-commerce",
    storageBucket: "lola-games-e-commerce.appspot.com",
    messagingSenderId: "717451395110",
    appId: "1:717451395110:web:5bb9330f0a731830a6a6e7"
})

// Conectar el sitio a Firebase
export const getFirebase = () => {
    return firebaseConfig
}

// Funcionalidades de Firebase
// Conectar el sitio a la base de datos
export const getFirestore = () => {
    return firebase.firestore(firebaseConfig)
}