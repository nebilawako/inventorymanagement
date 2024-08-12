// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
//To access fire base databas a function of firebase sdk
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD774RxkuhqznIvM7zFGenKiG6tPsA_VVw",
  authDomain: "inventory-managment2.firebaseapp.com",
  projectId: "inventory-managment2",
  storageBucket: "inventory-managment2.appspot.com",
  messagingSenderId: "1043444649177",
  appId: "1:1043444649177:web:05194376e8db03623d82c8",
  measurementId: "G-X5QTZMMTD4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// This function initializes the Firestore instance with the configuration provided by the app object. It connects your app to your Firestore database.
const firestore=getFirestore(app);

// exports the firestore instance so that it can be imported and used in other parts of your application. By doing this, you make the Firestore instance available throughout your project without needing to reinitialize it every time.

export{firestore}