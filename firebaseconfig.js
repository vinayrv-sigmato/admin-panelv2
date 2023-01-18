import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";


const firebaseConfig={
  apiKey: "AIzaSyCidVl7a3vV6txWN1pnj4buyi-xfDsF0EE",
  authDomain: "health-armour-425e0.firebaseapp.com",
  projectId: "health-armour-425e0",
  storageBucket: "health-armour-425e0.appspot.com",
  messagingSenderId: "556084351843",
  appId: "1:556084351843:web:9657b5b566c9dbafca3956"
  };
  
   const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app)
  export const auth = getAuth(app);