import { initializeApp } from "firebase/app";
import { initializeAuth } from "firebase/auth/react-native";
import "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAJ3oSFlSiY9VxM5VZYSgPP08L5YtBiA8M",
  authDomain: "imagebook-6c983.firebaseapp.com",
  projectId: "imagebook-6c983",
  storageBucket: "imagebook-6c983.appspot.com",
  messagingSenderId: "71281017003",
  appId: "1:71281017003:web:b64d1949d1b509d060f7ee",
};

const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
