import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyBtx42xl14Hfo5mXDA_ytCErbdBOzI71hI",
  authDomain: "e-commerce-community.firebaseapp.com",
  databaseURL: "https://e-commerce-community.firebaseio.com",
  projectId: "e-commerce-community",
  storageBucket: "e-commerce-community.appspot.com",
  messagingSenderId: "457538761692",
  appId: "1:457538761692:web:dc290b5092174a53091519",
  measurementId: "G-Y7Q6VD20LV"
};
firebase.initializeApp(firebaseConfig);

export default firebase;
