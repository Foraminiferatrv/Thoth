import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBmdby-L-8HOZMPBqQmE4_wPzt-JECnNK8",
  authDomain: "thoth-e5318.firebaseapp.com",
  databaseURL: "https://thoth-e5318-default-rtdb.firebaseio.com",
  projectId: "thoth-e5318",
  storageBucket: "thoth-e5318.appspot.com",
  messagingSenderId: "386873611883",
  appId: "1:386873611883:web:c3292693221ddd747fc32e",
  measurementId: "G-3K2WYTSZER"
};

firebase.initializeApp( firebaseConfig );
firebase.database();

export default firebase;