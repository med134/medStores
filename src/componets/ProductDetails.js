import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import {
  addToCart,
  productDecrease,
  productIncrease,
} from "../feautres/cartSlice";
import { BsChevronLeft } from "react-icons/bs";
import AnimatePage from "../animation/AnimatePage";

export const ProductDetails = () => {
  const { product } = useSelector((state) => state.allCart);
  console.log("product list", product);
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const navigate = useNavigate()

  return (
    <AnimatePage> 
    <div className="py-6">
      {/* Breadcrumbs */}
      {product.map((data) => (
        <div key={data.id} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* ./ Breadcrumbs */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
            <div className="flex flex-col md:flex-row -mx-4">
              <div className="md:flex-1 px-4">
                <div x-data="{ image: 1 }" x-cloak="">
                <button 
                class="flex items-center mb-4 space-x-2 rounded-md px-4 py-2 text-gray-800 font-medium transition hover:bg-blue-500 hover:text-white"
                onClick={()=>navigate("/")}>
                  <span>
                   <BsChevronLeft size={21} className="font-semibold"/>
                  </span>
                  <span> Back To Shop </span>
                </button>
                  <div className="h-80 md:h-80 rounded-lg bg-gray-100 mb-4 p-4">
                    <div className="h-72 md:h-72 rounded-lg bg-gray-100 mb-4 flex items-center justify-center">
                      <img src={data.img} alt="icon_product" width={280} />
                    </div>
                  </div>
                  <div className="flex -mx-2 mb-4">
                    <template x-for="i in 4" />
                  </div>
                </div>
              </div>
              <div className="md:flex-1 px-4">
                
                <h2 className="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">
                  {data.title}
                </h2>
                <p className="text-gray-500 text-sm">
                  By{" "}
                  <a href="/" className="text-blue-500 hover:underline">
                    Med Store
                  </a>
                </p>
                <div className="flex items-center space-x-4 my-4">
                  <div>
                    <div className="rounded-lg bg-gray-100 flex py-2 px-3">
                      <span className="font-bold text-blue-500 text-3xl">
                        {data.price}
                      </span>

                      <span className="text-indigo-400 mr-1 mt-1">
                        {t("MAD")}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-green-500 text-xl font-semibold">
                      Save 12%
                    </p>
                    <p className="text-gray-400 text-sm">
                      Inclusive of all Taxes.
                    </p>
                  </div>
                </div>
                <p className="text-gray-500">
                  Lorem ipsum, dolor sit, amet consectetur adipisicing elit.
                  Vitae exercitationem porro saepe ea harum corrupti vero id
                  laudantium enim, libero blanditiis expedita cupiditate a est.
                </p>
                <div className="inline-block py-2 space-x-4">
                  <div className="relative">
                    {/* <div className="text-center left-0 pt-2 right-0 absolute block text-xs uppercase text-gray-400 tracking-wide font-semibold"></div> */}
                    <div className="sm:order-1 ml-4">
                      <div className="mx-auto flex h-8 items-stretch text-gray-600 sm:float-left">
                        <button
                          className="flex items-center justify-center rounded-l-md bg-gray-200 px-4 transition hover:bg-blue-500 hover:text-white"
                          onClick={() => dispatch(productDecrease(data.id))}
                        >
                          -
                        </button>
                        <div className="flex w-full items-center justify-center bg-gray-100 px-4 text-xs uppercase transition">
                          {data.quantity}
                        </div>
                        <button
                          className="flex items-center justify-center rounded-r-md bg-gray-200 px-4 transition hover:bg-blue-500 hover:text-white"
                          onClick={() => dispatch(productIncrease(data.id))}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <button
                    className="py-3 px-5  mt-4 font-semibold rounded-xl bg-blue-500 hover:bg-blue-600 text-white"
                    onClick={() => dispatch(addToCart(data))}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    </AnimatePage>
  );
};
