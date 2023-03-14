import React, { useState, useContext } from "react";
import "./css_files/cartItem.css";
import { ShopContext } from "../context/Shop-Context";
import Remove from "../images/rubbish-bin.png";
import { useTranslation } from 'react-i18next';

const CartItems = (props) => {
  const { id, name_pro, img, price } = props.product;
  const { t, i18n } = useTranslation();
  const { removeFromCart, cartItems, addToCart, updateCart, removeItem } =
    useContext(ShopContext);
  

  return (
    <div className="flex h-full flex-col bg-white shadow-xl">
      <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
        <div className="flex items-start justify-between"></div>
        <div className="mt-8">
          <div className="flow-root">
            <ul className="-my-6 divide-y divide-gray-200">
              <li className="flex py-6">
                <div className="h-28 w-28 p-2 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                  <img
                    src={img}
                    alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="ml-10 flex flex-1 flex-col">
                  <div>
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <h3>
                        <a href="/">{name_pro}</a>
                      </h3>
                      <p className="ml-4">{price} {t('MAD')} </p>
                    </div>
                    <p className="mt-1 text-sm text-gray-500">Salmon</p>
                  </div>
                  <div className="flex flex-1 items-end justify-between text-sm">
                    <div className="inline-flex items-center mt-2">
                      <button
                        className="bg-white rounded-l border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200"
                        onClick={() => {
                          if (cartItems[id] > 1) {
                            removeFromCart(id);
                          }
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M20 12H4"
                          />
                        </svg>
                      </button>
                      <div className="bg-gray-100 border-t font-semibold border-b border-gray-100 text-gray-600 hover:bg-gray-100 inline-flex items-center px-4 py-1 select-none">
                        {cartItems[id]}
                      </div>
                      <button
                        className="bg-white rounded-r border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200"
                        onClick={() => addToCart(id)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 4v16m8-8H4"
                          />
                        </svg>
                      </button>
                    </div>
                    <div className="flex">
                      <img
                        src={Remove}
                        alt="remove_icon"
                        width={30}
                        className="cursor-pointer hover:fill-red-500"
                        onClick={()=>removeItem(id)}
                      />
                    </div>
                  </div>
                </div>
              </li>
              <li className="flex py-6"></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
