import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBxcnv_xSyvmWYzSBuO2zwm96Wq2GBQzB0",
  authDomain: "graphiql-project.firebaseapp.com",
  projectId: "graphiql-project",
  storageBucket: "graphiql-project.appspot.com",
  messagingSenderId: "228379288183",
  appId: "1:228379288183:web:f310b63a8fd8bd2d3a5c72",
  measurementId: "G-XYYG4M0D76",
};

const firebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(firebaseApp);
