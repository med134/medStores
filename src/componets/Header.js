import React, { useState, useEffect } from "react";
import "./css_files/Header.css";
import Logo from "../images/logo.png";
import { BsPersonPlusFill, BsPersonFill } from "react-icons/bs";
import { FiSettings, FiSearch } from "react-icons/fi";
import { RiShareForward2Line } from "react-icons/ri";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { selectUserName, setLogOut } from "../feautres/userSlice";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";

function Header() {
  const { t, i18n } = useTranslation();
  const { cart } = useSelector((state) => state.allCart);
  const [open, setOpen] = useState(false);
  const userName = useSelector(selectUserName);
  const [photo, setPhoto] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleOpen = () => {
    setOpen(!open);
  };

  const logOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(setLogOut());
      })
      .catch((err) => alert(err.message));
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("photo", user.photoURL);
        setPhoto(user.photoURL);
        const name = user.displayName;
        const email = user.email;
        const icon = user.photoURL;
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("photo", icon);
      }
    });
  }, []);
  return (
    <nav>
      <input id="nav-toggle" type="checkbox" />
      <div className="logo">
        <img src={Logo} alt="image_logo" onClick={() => navigate("/")} />
      </div>
      <ul className="links">
        <li>
          {" "}
          <NavLink to="/" exact="true" active="true">
            {t("header")}
          </NavLink>
        </li>
        <li>
          <NavLink to="/contactUs" exact="true" active="true">
            {t("headerContact")}
          </NavLink>
        </li>
        
      </ul>
      <div className="icons font-bold flex mt-[21px] relative">
        <NavLink active="true" exact="true" className="hover:text-black">
          <div className="text-center font-mono">
            <button onClick={handleOpen}>
              {" "}
              {userName ? (
                <img
                  alt="user"
                  src={photo}
                  width={38}
                  className="rounded-[50%] text-xs"
                />
              ) : (
                <BsPersonPlusFill size={32} className="text-tb" />
              )}
            </button>
            {open ? (
              <div className="absolute text-[18px] right-6 mt-[28px] z-50 w-48 h-70 p-2 bg-white rounded-2xl font-['Cairo']">
                <Link
                  to="/login"
                  className="inline-flex text-gray-600 hover:bg-grey-lighter"
                >
                  {userName != null ? (
                    <Link to="/account">hi, {userName}</Link>
                  ) : (
                    <Link
                      to="/login"
                      className="flex px-2 py-2 text-gray-600 hover:bg-grey-lighter"
                    >
                      Login
                    </Link>
                  )}
                </Link>
                <hr className="border-t mx-2 border-grey-light" />
                <Link
                  to="/account"
                  className="flex px-4 py-2  text-gray-600 hover:bg-grey-lighter"
                >
                  <BsPersonFill className="mr-2" size={26} />
                  Profile
                </Link>
                <Link
                  to="/account"
                  className="px-4 py-2 flex  text-gray-600 hover:bg-grey-lighter"
                >
                  <FiSettings className="mr-2" size={24} />
                  setting
                </Link>
                <hr className="border-t mx-2 border-grey-light" />
                <button
                  onClick={logOut}
                  className="px-9 py-2 flex text-gray-600 hover:bg-grey-lighter"
                >
                  Logout
                  <RiShareForward2Line className="ml-4" size={25} />
                </button>
              </div>
            ) : null}
          </div>
        </NavLink>
        <NavLink
          to="/Card"
          active="true"
          exact="true"
          className="items-center ml-8"
        >
          <div className="relative scale-75">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-10 w-10 text-tb"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
            <span className="absolute -top-3 left-4 rounded-full bg-red-500 p-0.5 px-2 text-sm text-red-50">
              {cart.length}
            </span>
          </div>
        </NavLink>
      </div>
      <label htmlFor="nav-toggle" className="icon-burger">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </label>
    </nav>
  );
}

export default Header;
