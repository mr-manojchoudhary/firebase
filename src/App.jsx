import React from "react";
import Table from "./Table";
import Form from "./Form";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkO2uxSzSBwX7jxvJFruxtcGEmSnKaRhQ",
  authDomain: "wsjp-61-ed096.firebaseapp.com",
  databaseURL: "https://wsjp-61-ed096-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "wsjp-61-ed096",
  storageBucket: "wsjp-61-ed096.firebasestorage.app",
  messagingSenderId: "260547699290",
  appId: "1:260547699290:web:800da2dfee120012ac6e63",
  measurementId: "G-QXY52BG461"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);




export default function App() {
  return(
    <>
    <div className="grid  grid-cols-6">
         <div className="col-span-4 ">
          <Table />
         </div>
         <div className=" col-span-2" >
          <Form />
         </div>
    </div>
    </>
  )
}