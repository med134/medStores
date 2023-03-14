import React from "react";
import Logo from "../images/logo.png";
import { useState, useContext, useEffect } from "react";
import "./css_files/showProduct.css";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../context/Shop-Context";
import {
  signInWithEmailAndPassword,createUserWithEmailAndPassword
} from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import AnimatePage from "../animation/AnimatePage";
import { useTranslation } from "react-i18next";

const Login = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const { googleSignIn, user,signInWithFacebook } = useContext(ShopContext);
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  // signInWithGoogle
  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };
 

  useEffect(() => {
    if (user != null) {
      navigate("/account");
    }
  }, [user]);


  // registre
  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <section className=" bg-gray-100 bg-gradient-to-br">
      <AnimatePage>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="/"
          className="flex items-center mb-6 text-xl font-['Pacifico'] text-gray-900 dark:text-white"
        >
          <img className="w-8 h-8 mr-2" src={Logo} alt="logo" />
          Med Store
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              {t('signIn')}
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  {t('yourEmail')}
                </label>
                <input
                  type="email"
                  name="email"
                  onChange={(event) => {
                    setLoginEmail(event.target.value);
                  }}
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  {t('password')}
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  onChange={(event) => {
                    setLoginPassword(event.target.value);
                  }}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required=""
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="remember"
                      className="text-gray-500 dark:text-gray-300"
                    >
                    {t('remember')}
                    </label>
                  </div>
                </div>
                <a
                  href="/"
                  className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                 {t('forget')}
                </a>
              </div>
              <button
                onClick={register}
                type="submit"
                className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-blue-700 dark:focus:ring-primary-800"
              >
              {t('login')}
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                {t('registration')}
              </p>
            </form>
          </div>
          <div className="grid space-y-4 p-4">
            <button
              onClick={handleGoogleSignIn}
              className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100"
            >
              <div className="relative flex items-center space-x-4 justify-center">
                <img
                  src="https://tailus.io/sources/blocks/social/preview/images/google.svg"
                  className="absolute left-0 w-5"
                  alt="google_logo"
                />

                <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">
                  {t('withGoogle')}
                </span>
              </div>
            </button>

            <button
              className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100"
              onClick={signInWithFacebook}
            >
              <div className="relative flex items-center space-x-4 justify-center">
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/0/04/Facebook_f_logo_%282021%29.svg"
                  className="absolute left-0 w-5"
                  alt="Facebook logo"
                />
                <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">
                  {t('withFacebook')}
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </AnimatePage>
    </section>
  );
};

export default Login;
