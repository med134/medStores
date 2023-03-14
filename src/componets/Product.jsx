import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../context/Shop-Context";
import { BsCartCheck } from "react-icons/bs";
import { useTranslation } from "react-i18next";

function Product(props) {
  const { id, price, img, imgSecond, name_pro } = props.product;
  const { addToCart, cartItems, removeFromCart, removeItem } =
    useContext(ShopContext);
  const cartItemAmount = cartItems[id];
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  return (
    <div className="group my-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
      <p className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl">
        <img
          className="peer absolute top-0 right-0 h-full w-full object-cover p-7"
          src={img}
          alt="product_image"
        />
        <img
          className="peer absolute top-0 -right-96 h-full w-full object-cover transition-all delay-100 duration-1000 hover:right-0 peer-hover:right-0 bg-slate-100"
          src={imgSecond}
          alt="product_image"
        />
        <svg
          className="pointer-events-none absolute inset-x-0 bottom-5 mx-auto text-3xl text-white  transition-opacity group-hover:animate-ping group-hover:opacity-30 peer-hover:opacity-0"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="img"
          width="1em"
          height="1em"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 32 32"
        >
          <path
            fill="currentColor"
            d="M2 10a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v10a4 4 0 0 1-2.328 3.635a2.996 2.996 0 0 0-.55-.756l-8-8A3 3 0 0 0 14 17v7H6a4 4 0 0 1-4-4V10Zm14 19a1 1 0 0 0 1.8.6l2.7-3.6H25a1 1 0 0 0 .707-1.707l-8-8A1 1 0 0 0 16 17v12Z"
          />
        </svg>
      </p>
      <div className="mt-4 px-5 pb-5">
        {cartItemAmount > 0 && (
          <>
            <BsCartCheck className="text-green-500 float-right" size={32} />
            {/* {cartItemAmount > 0 && <> {cartItemAmount}</>} */}
          </>
        )}
        <a href="/">
          <h5 className="text-xl tracking-tight text-slate-900">{name_pro}</h5>
        </a>
        <div className="mt-2 mb-5 flex items-center justify-between">
          <p>
            <span className="text-2xl font-bold text-slate-900">
              {price}
              <span className="text-xl">{t("MAD")}</span>
            </span>
          </p>
          <span className="text-sm text-slate-900 line-through ml-8">
            {" "}
            699MAD
          </span>
        </div>
        <div className="flex">
          <button
            className="flex items-center w-60 justify-center rounded-md bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
            onClick={() => addToCart(id)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            {t("AddToCart")}
          </button>
          <button className="" onClick={() => removeItem(id)}>
            <svg
              className="w-10 h-10 hover:text-blue-600 rounded-full hover:bg-gray-100 p-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
export default Product;
