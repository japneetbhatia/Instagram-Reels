import firebaseConfig from "../secret";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import 'firebase/compat/storage';
import 'firebase/compat/firestore'
const firestore = firebase.firestore();
firebase.initializeApp(firebaseConfig);
export const storage = firebase.storage();
// collection/>>
export const database = {
    users: firestore.collection('users')
}
export default firebase;