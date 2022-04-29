import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyDJ1HpIKgRoJQiOWTnsUmXLTWynpZXcDL4",
    authDomain: "bd-motors-a5d14.firebaseapp.com",
    projectId: "bd-motors-a5d14",
    storageBucket: "bd-motors-a5d14.appspot.com",
    messagingSenderId: "9367590888",
    appId: "1:9367590888:web:4afcd88f0f216b271c365d"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;