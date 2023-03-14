import { createContext, useState,useEffect } from "react";
import { PRODUCTS } from "../assets/PRODUCTS";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  FacebookAuthProvider,
} from 'firebase/auth';
import {auth} from '../firebase/firebaseConfig';


export const ShopContext = createContext(null);
const getDefaultCart = () => {
  let cart = {};
  for (let i = 0; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};


export const ShopContextProvider = (props) => {
  const [user, setUser] = useState({});
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const [amount, setAmount] = useState(0);


  //signInWithFacebook
  const signInWithFacebook = () => {
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const name = result.user.displayName;
        const email = result.user.email;
        const profilePic = result.user.photoURL;
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("profilePic", profilePic);
        console.log(result);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  // code about authotification
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
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
    //signInWithRedirect(auth, provider)
  };
  const logOut = () => {
    signOut(auth)
}
useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
    console.log('User', currentUser)
  });
  return () => {
    unsubscribe();
  };
}, []);
  const addToCart = (itemId) => {
    
    setAmount(amount + 1);
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
     
  };

  const removeFromCart = (itemId) => {
    setAmount(amount - 1);
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };
  const updateCart = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };
  const removeItem = (idItem) => {
    setCartItems((prev) => ({
      ...prev,
      [idItem]: prev[idItem] - prev[idItem],
    }));
  }; // get all provider

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    updateCart,
    getTotalCartAmount,
    removeItem,
    amount,
    googleSignIn,
    logOut,
    user,
    signInWithFacebook,
  };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

