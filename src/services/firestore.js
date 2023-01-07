import { initializeApp } from 'firebase/app';
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBw6TQ3fsjNngHwd8qYNVy7Q9KENHarALo",
    authDomain: "lingua-f.firebaseapp.com",
    projectId: "lingua-f",
    storageBucket: "lingua-f.appspot.com",
    messagingSenderId: "72453750924",
    appId: "1:72453750924:web:2541a5a6eb767517f83ba9"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Export firestore database
// It will be imported into your react app whenever it is needed
export const db = getFirestore(app);
