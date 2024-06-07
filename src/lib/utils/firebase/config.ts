// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyBuQQxLTumvxgrPyczW5_2_qVSduX3Yfv0",
	authDomain: "liability-products-crm.firebaseapp.com",
	projectId: "liability-products-crm",
	storageBucket: "liability-products-crm.appspot.com",
	messagingSenderId: "891702435550",
	appId: "1:891702435550:web:0f3305ec45ef2d38312c4f",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
