// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyBQRdaXBAyaUrNBIkjZORh1oNeCGSU56vE",
	authDomain: "food-ordering-app-61404.firebaseapp.com",
	projectId: "food-ordering-app-61404",
	storageBucket: "food-ordering-app-61404.appspot.com",
	messagingSenderId: "608342677050",
	appId: "1:608342677050:web:48b220740794b1edcf0703",
	measurementId: "G-KESQSCNFLW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
