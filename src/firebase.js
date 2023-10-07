// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore } from 'firebase/firestore';

// import { collection, getDocs } from 'firebase/firestore';
// import { db } from "../../firebase.js";

const firebaseConfig = {
  apiKey: "AIzaSyA_mRb5Zf4fpio17APvCMNh9vBI_6QWZBM",
  authDomain: "portfolio-be6ea.firebaseapp.com",
  projectId: "portfolio-be6ea",
  storageBucket: "portfolio-be6ea.appspot.com",
  messagingSenderId: "39392458779",
  appId: "1:39392458779:web:b1d2c620dd6c0c92b9e0be",
  measurementId: "G-46GXJ42S5X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// init services
export const db = getFirestore();

    // // collection ref
    // const colRef = collection(db,'experiences');
    
    // //get data
    // getDocs(colRef).then((snapshot)=>{
    //     let experiences = []
    //     snapshot.docs.forEach((doc)=>{
    //       experiences.push({ ...doc.data(), id: doc.id})
    //     })

    //     experiences.forEach(element => {
    //         console.log(typeof(experiences))      
    //         });
    //     })