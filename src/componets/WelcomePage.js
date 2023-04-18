import React from "react";
import { useTranslation } from "react-i18next";
import clothing from "../images/clothing.jpg";
import shoes from "../images/shoes.jpg";
import watch from "../images/watch2.jpg";
import wall from "../images/wall.jpg";
import { useNavigate } from "react-router-dom";

const WelcomePage = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  return (
    <>
      <div className="flex min-h-screen w-screen">
        <div className="relative my-auto mx-auto flex flex-col px-4 sm:max-w-xl md:max-w-screen-xl md:flex-row">
          {/* Left Column */}
          <div className="mx-auto flex w-full max-w-xl lg:max-w-screen-xl">
            <div className="mb-16 lg:my-auto lg:max-w-lg">
              <div className="mb-6 max-w-xl">
                <div>
                  <p className="bg-teal-accent-400 mb-2 inline-block rounded-full bg-lime-300 px-3 py-1 text-xs font-semibold uppercase tracking-wider  text-indigo-900">
                    25% off this summer
                  </p>
                </div>
                <h2 className="mb-6 max-w-lg text-3xl font-extrabold text-slate-700 sm:text-5xl sm:leading-snug">
                  {t("dec")}
                  <br />
                  {t("promo1")}
                  <span className="rounded- abg-gradient-to-r inline-block bg-sky-400 from-lime-400 to-sky-400 px-2 font-bold text-white">
                    {t("promo2")}
                  </span>
                </h2>
                <p className="text-base text-gray-700 md:text-lg">
                  {t("para")}
                </p>
              </div>
              <div className="flex items-center">
                <button
                  onClick={() => navigate("/Login")}
                  className="bg-sky-400a mr-6 inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-400 to-sky-400 px-8 font-medium tracking-wide text-white shadow-lg shadow-sky-300 outline-none transition duration-200 hover:scale-110 hover:bg-sky-500 focus:ring"
                >
                  Get started{" "}
                </button>
                <a
                  href="/"
                  className="inline-flex items-center font-semibold text-sky-400 transition-colors duration-200 hover:text-lime-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2 h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Watch Videos
                </a>
              </div>
            </div>
          </div>
          {/* /Left Column */}
          {/* Right Column */}
          <div className="flex h-full w-full space-x-3 overflow-hidden md:justify-end">
            {/* Col 2 */}
            <div className="hidden w-56 items-center space-y-3 lg:flex">
              <div className="overflow-hidden rounded-xl bg-yellow-400">
                <img
                  className="peer h-full w-full object-cover"
                  src={wall}
                  alt=""
                />
              </div>
            </div>
            <div className="w-full flex-col space-y-3 rounded-xl py-4 lg:flex lg:w-80">
              <div className="h-40 overflow-hidden rounded-xl bg-green-600/60">
                <img
                  className="mx-auto h-full w-full object-cover"
                  src={shoes}
                  alt=""
                />
              </div>
              <div className="h-40 overflow-hidden rounded-xl bg-pink-600/60">
                <img
                  className="mx-auto h-full w-full object-cover"
                  src={clothing}
                  alt=""
                />
              </div>
              <div className="h-40 overflow-hidden rounded-xl bg-blue-600/60">
                <img
                  className="mx-auto h-full w-full object-cover"
                  src={watch}
                  alt=""
                />
              </div>
            </div>
          </div>
          {/* /Right Column */}
        </div>
      </div>
    </>
  );
};

export default WelcomePage;
