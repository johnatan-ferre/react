import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBRalBnMJ9BIFgvKIkUwvNtcbNFom_5__Q",
    authDomain: "backendgrailecommerce.firebaseapp.com",
    projectId: "backendgrailecommerce",
    storageBucket: "backendgrailecommerce.appspot.com",
    messagingSenderId: "406330893986",
    appId: "1:406330893986:web:da07b38fcd4f59c170d9fb"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
