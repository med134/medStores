import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import { BsCartPlus } from "react-icons/bs";
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
  const navigate = useNavigate();

  return (
    <AnimatePage>
      <div className="py-6 font-['Cairo']">
        {product.map((data) => (
          <div
            key={data.id}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 "
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
              <div className="flex flex-col md:flex-row -mx-4">
                <div className="md:flex-1 px-4">
                  <button
                    class="flex items-center mb-4 space-x-2 rounded-md px-4 py-2 text-gray-800 font-medium transition hover:bg-blue-500 hover:text-white"
                    onClick={() => navigate("/")}
                  >
                    <span>
                      <BsChevronLeft size={21} className="font-semibold" />
                    </span>
                    <span> {t("back")}</span>
                  </button>
                  <div className="h-80 md:h-80 rounded-lg bg-gray-100 mb-4 p-4">
                    <div className="h-72 md:h-72 rounded-lg bg-gray-100 mb-4 flex items-center justify-center">
                      <img src={data.img} alt="icon_product" width={280} />
                    </div>
                  </div>
                </div>
                <div className="md:flex-1 px-4 text-left">
                  <h2 className="mb-2 text-left leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">
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
                      <p className="text-green-500 text-xl font-semibold text-left">
                        Save 12%
                      </p>
                      <p className="text-gray-400 text-sm text-left">
                        {t("Inclusive")}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-500">
                    Lorem ipsum, dolor sit, amet consectetur adipisicing elit.
                    Vitae exercitation porro saepe ea larum corrupting vero id
                    laudianism enum, libero banditries expedite cuspidate a est.
                  </p>

                  <button
                    onClick={() => dispatch(addToCart(data))}
                    className="inline-flex text-white bg-blue-500 border-0 py-2 px-4 focus:outline-none hover:bg-blue-600 rounded"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-2 h-6 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                    </svg>{" "}
                    {t("addToCart")}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </AnimatePage>
  );
};
