// import { seedDatabase } from '../seed';

const config = {
    apiKey: "AIzaSyCFsSat-3iQsXQDEkIsfAk5tXx-zKvmokM",
    authDomain: "instagram-clone-4535c.firebaseapp.com",
    projectId: "instagram-clone-4535c",
    storageBucket: "instagram-clone-4535c.appspot.com",
    messagingSenderId: "559755103228",
    appId: "1:559755103228:web:5a653bf324ee4809210079"
  };

  const firebase = window.firebase.initializeApp(config);
  const { FieldValue } = window.firebase.firestore;
  
//   seedDatabase(firebase);
  
  export { firebase, FieldValue };