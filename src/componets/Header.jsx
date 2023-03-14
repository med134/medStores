import React from "react";
import { useContext, useState } from "react";
import "./css_files/Header.css";
import Logo from "../images/logo.png";
import { BsPersonPlusFill } from "react-icons/bs";
import { NavLink, useNavigate } from "react-router-dom";
import { ShopContext } from "../context/Shop-Context";
import { useTranslation } from 'react-i18next';

function Header(props) {
  const { amount, user } = useContext(ShopContext);
  const { t, i18n } = useTranslation();

  const navigate = useNavigate();
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
          {t('header')}
          </NavLink>
        </li>

        <li>
          <NavLink to="/contactUs" exact="true" active="true">
            {t('headerContact')}
          </NavLink>
        </li>
      </ul>

      <div className="icons font-bold flex mt-5 relative">
        <NavLink to="/Login" className="hover:text-black mr-4">
          {user ? (
            <img
              alt="user"
              src={user?.photoURL}
              width={34}
              className="rounded-[50%]"
            />
          ) : (
            <BsPersonPlusFill
              size={30}
              className="text-tb hover:text-black font-bold"
            />
          )}
        </NavLink>
        <NavLink
          to="/Card"
          active="true"
          exact="true"
          className="items-center ml-5"
        >
          <button className="flex items-center hover:text-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span
              className={`flex absolute -mt-5 ml-4 ${
                amount > 0 ? "show" : "hidden"
              }`}
            >
              <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
            </span>
          </button>
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
