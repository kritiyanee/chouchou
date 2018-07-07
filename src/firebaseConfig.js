// /firebaseConfig.js//
import Firebase from 'firebase'

 var config = {
    apiKey: "AIzaSyCqDMswPd-M6r1hNICD2BLI3m1QyN_fZX0",
    authDomain: "chouchou-2226d.firebaseapp.com",
    databaseURL: "https://chouchou-2226d.firebaseio.com",
    projectId: "chouchou-2226d",
    storageBucket: "chouchou-2226d.appspot.com",
    messagingSenderId: "138196416970"
  };
const firebaseApp = Firebase.initializeApp(config);
const db = firebaseApp.database()
export const dbAuth = firebaseApp.auth()
export const postRef = db.ref('posts')
export const cartRef = db.ref('carts')
export const storage = firebaseApp.storage()

