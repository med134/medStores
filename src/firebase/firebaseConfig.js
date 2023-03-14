import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider,signInWithPopup} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDTs8IGBUctnhCH71-Thg3TwI2Yr8zAyFI",
    authDomain: "medstore-bd9d1.firebaseapp.com",
    projectId: "medstore-bd9d1",
    storageBucket: "medstore-bd9d1.appspot.com",
    messagingSenderId: "299894741300",
    appId: "1:299894741300:web:411e0d3b3ef654f17e6d61",
    measurementId: "G-XWZTQYV4E2"
  };

  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  
  export const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const name = result.user.displayName;
        const email = result.user.email;
        const profilePic = result.user.photoURL;
  
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("profilePic", profilePic);
      })
      .catch((error) => {
        console.log(error);
      });
  };