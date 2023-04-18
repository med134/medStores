import React from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, productDetail } from "../feautres/cartSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import WelcomePage from "./WelcomePage";
import { useNavigate } from "react-router";
import AnimatePage from "../animation/AnimatePage";

export default function Home() {
  const items = useSelector((state) => state.allCart.items);
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(items);

  const showProductCard = (item) => {
    dispatch(productDetail(item));
    navigate("/productDetails");
  };

  return (
    <>
      <AnimatePage>
        <WelcomePage />
        <section className="bg-white py-12 text-gray-700 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-md text-center">
              <h2 className="font-serif text-2xl font-bold">All Products</h2>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-3 sm:grid-cols-3 lg:mt-16 lg:grid-cols-5 lg:gap-3">
              {items.map((item) => (
                <article
                  key={item.id}
                  className="relative bg-slate-100 p-2 rounded-md max-h-70"
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      onClick={() => showProductCard(item)}
                      className="group-hover:scale-125 h-auto w-auto object-cover transition-all duration-300 cursor-pointer"
                      src={item.img}
                      alt="product_image"
                    />
                  </div>
                  <div className="absolute top-0 m-1 rounded-full bg-white"></div>
                  <div className="mt-4 flex items-start justify-between">
                    <div className="">
                      <h3 className="text-xs font-semibold sm:text-sm md:text-base">
                        <a href="/" className="cursor-pointer">
                          {item.title}
                          <span className="absolute" aria-hidden="true" />
                        </a>
                      </h3>
                      <div className="mt-2 flex items-center">
                        <svg
                          className="block h-3 w-3 align-middle text-black sm:h-4 sm:w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            className=""
                          />
                        </svg>
                        <svg
                          className="block h-3 w-3 align-middle text-black sm:h-4 sm:w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            className=""
                          />
                        </svg>
                        <svg
                          className="block h-3 w-3 align-middle text-black sm:h-4 sm:w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            className=""
                          />
                        </svg>
                        <svg
                          className="block h-3 w-3 align-middle text-black sm:h-4 sm:w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            className=""
                          />
                        </svg>
                        <svg
                          className="block h-3 w-3 align-middle text-gray-400 sm:h-4 sm:w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            className=""
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="text-right">
                      <del className="mt-px text-xs font-semibold text-gray-600 sm:text-sm">
                        {" "}
                        {item.lastPrice} {t("MAD")}
                      </del>
                      <p className="text-xs font-normal sm:text-sm md:text-base">
                        {item.price} {t("MAD")}
                      </p>
                    </div>
                  </div>
                  <div className="relative w-auto h-full">
                    <button
                      onClick={() => dispatch(addToCart(item))}
                      className="flex items-center justify-center bg-blue-600 md:py-2 md:px-5 sm:py-2 sm:px-4 min-[319px]:py-1 px-2 max-[600px]:py-1 text-white transition hover:bg-blue-700 rounded-md"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-2 h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                      </svg>
                      Add to cart
                    </button>
                    <ToastContainer position={"top-right"} autoClose={1000} />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </AnimatePage>
    </>
  );
}
