import {initializeApp} from "firebase/app"
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD44ycZWtQOIrUBFLbYi0GNJDI7Q6q8lnE",
    authDomain: "netflix-96287.firebaseapp.com",
    projectId: "netflix-96287",
    storageBucket: "netflix-96287.appspot.com",
    messagingSenderId: "188093942353",
    appId: "1:188093942353:web:1bd563243e355318168670"
  };

  const app=initializeApp(firebaseConfig);
  const auth=getAuth();
  const db=getFirestore()

  export {app,auth,db}