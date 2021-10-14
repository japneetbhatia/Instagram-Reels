import firebaseConfig from "../secret";
import firebase from "firebase/compat/app";
import "firebase/auth";
import 'firebase/storage';
import 'firebase/firestore'
firebase.initializeApp(firebaseConfig);
// firestore -> database user details add
const firestore = firebase.firestore();
// asset store 
export const storage = firebase.storage();

// collection>>
export const database = {
    users: firestore.collection('users'),
    createdAt: firestore.FieldValue
}
export default firebase;