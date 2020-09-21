import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyAVfuDVGv4rK48uEMPyfZIPFWpungU4pxA",
    authDomain: "whatapp-clone-a145f.firebaseapp.com",
    databaseURL: "https://whatapp-clone-a145f.firebaseio.com",
    projectId: "whatapp-clone-a145f",
    storageBucket: "whatapp-clone-a145f.appspot.com",
    messagingSenderId: "644489511209",
    appId: "1:644489511209:web:596fdfbbf7e3feb679b738"
  };


  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth =firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;