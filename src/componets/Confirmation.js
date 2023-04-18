import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { VscTrash } from "react-icons/vsc";
import {BsArrowLeft } from "react-icons/bs";
import { useEffect } from "react";
import {
  getCartTotal,
  removeFromCart,
  decreaseItemQuantity,
  increaseItemQuantity,
} from "../feautres/cartSlice.js";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
 import {BsFillBagCheckFill} from "react-icons/bs";
 import AnimatePage from "../animation/AnimatePage";

export const Confirmation = () => {
  const { t, i18n } = useTranslation();
  const { cart, totalQuantity, totalPrice } = useSelector(
    (state) => state.allCart
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);
  return (
    <AnimatePage> 
    <div className="m-10 shadow-sm">
      <div className="lg:m-10">
        <div className="flex"> 
        <div className="mt-2 ml-4" onClick={()=>navigate('/card')}>
          <BsArrowLeft size={25} className="cursor-pointer hover:text-tb font-semibold"/>
        </div>
          <h1 className="mb-4 ml-6 mt-1 text-xl lg:text-2xl text-tb">
            Complet your Order
          </h1>
          </div>
        <form className="border-gray-100 space-y-3 h-full -md mx-auto rounded-md bg-white p-6 shadow-xl lg:p-10">
          <div>
            <label className=""> full Name :</label>
            <input
              type="text"
              placeholder="fullName"
              className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
            />
          </div>
          <div>
            <label className=""> City: </label>
            <input
              type="text"
              placeholder="your city"
              className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
            />
          </div>
          <div>
            <label className=""> street Address : </label>
            <input
              type="text"
              placeholder="address street"
              className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
            />
          </div>
          <div className="grid gap-3 lg:grid-cols-2">
            <div>
              <label className="">
                {" "}
                Phone Number: <span className="text-sm text-gray-400"></span>{" "}
              </label>
              <input
                type="tel"
                placeholder="+212 5445 0543"
                className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
              />
            </div>
          </div>
        </form>
        {totalPrice > 0 ? (
          <h5 className="bg-gray-100 p-2 text-tb flex"> <BsFillBagCheckFill className="mr-2"/> Your Order</h5>
        ) : null}
        <div className="bg-white shadow-sm">
          {cart?.map((data) => (
            <div key={data.id} className="flow-root p-4 border-b">
              <ul className="-my-8">
                <li className="flex flex-col space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0">
                  <div className="shrink-0">
                    <img
                      className="h-24 w-24 max-w-full rounded-lg object-cover border-separate"
                      src={data.img}
                      alt="product_image"
                    />
                  </div>
                  <div className="relative flex flex-1 flex-col justify-between">
                    <div className="sm:col-gap-5 sm:grid sm:grid-cols-2">
                      <div className="pr-8 sm:pr-5">
                        <p className="text-base font-semibold text-gray-900">
                          {data.title}
                        </p>
                        <p className="mx-0 mt-1 mb-0 font-semibold text-sm text-gray-700">
                          {data.price} {t("MAD")}
                        </p>
                      </div>
                      <div className="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
                        <p className="shrink-0 w-20 text-base font-semibold text-gray-900 sm:order-2 sm:ml-8 sm:text-right"></p>
                        <div className="sm:order-1">
                          <div className="mx-auto flex h-8 items-stretch text-gray-600 sm:float-left">
                            <button
                              onClick={() =>
                                dispatch(decreaseItemQuantity(data.id))
                              }
                              className="flex items-center justify-center rounded-l-md bg-gray-200 px-4 transition hover:bg-blue-500 hover:text-white"
                            >
                              -
                            </button>
                            <div className="flex w-full items-center justify-center bg-gray-100 px-4 text-xs uppercase transition">
                              {data.quantity}
                            </div>
                            <button
                              onClick={() =>
                                dispatch(increaseItemQuantity(data.id))
                              }
                              className="flex items-center justify-center rounded-r-md bg-gray-200 px-4 transition hover:bg-blue-500 hover:text-white"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-0 right-0 flex sm:bottom-0 sm:top-auto">
                      <button
                        onClick={() => dispatch(removeFromCart(data.id))}
                        type="button"
                        className="rounded text-center text-gray-500 transition-all duration-200 ease-in-out focus:shadow"
                      >
                        <VscTrash size={24} />
                      </button>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          ))}
          {totalPrice > 0 ? (
            <div className="px-4 py-6 sm:px-8 sm:py-10">
              <div className="mt-6  border-b py-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-gray-600">
                    total Quantity
                  </p>
                  <p className="text-lg font-semibold text-gray-900">
                    {totalQuantity}
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-600">
                    Paiement when recieving <br />
                    Delivery time: 2 to 4 days after order confirmation
                  </p>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900">Total</p>
                <p className="text-2xl font-semibold text-gray-900">
                  <span className="text-sm font-normal text-gray-600">
                    {t("MAD")}
                  </span>{" "}
                  {totalPrice}
                </p>
              </div>
              <div className="mt-6 text-center">
                <button
                  onClick={() => navigate("/confirmation")}
                  type="button"
                  className="group inline-flex w-full items-center justify-center rounded-md bg-blue-500 px-3 py-2 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-blue-600"
                >
                  Shipping
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="group-hover:ml-8 ml-4 h-6 w-6 transition-all"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
    </AnimatePage>
  );
};
