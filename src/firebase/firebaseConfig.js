import { initializeApp } from "firebase/app";
import { FacebookAuthProvider, getAuth, GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDTs8IGBUctnhCH71-Thg3TwI2Yr8zAyFI",
  authDomain: "medstore-bd9d1.firebaseapp.com",
  projectId: "medstore-bd9d1",
  storageBucket: "medstore-bd9d1.appspot.com",
  messagingSenderId: "299894741300",
  appId: "1:299894741300:web:411e0d3b3ef654f17e6d61",
  measurementId: "G-XWZTQYV4E2",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const fProvider = new FacebookAuthProvider();

export { auth, provider,fProvider };
