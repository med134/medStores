import React from "react";
import Product from "./Product";
import { Link } from "react-router-dom";
import { PRODUCTS } from "../assets/PRODUCTS";
import AnimatePage from "../animation/AnimatePage";
import { useTranslation } from 'react-i18next';

function Home() {
  const { t, i18n } = useTranslation();
  return (
    <>
    <AnimatePage>
      <div className="pt-20  bg-whiteOne">
        <h1 className="text-center text-2xl font-bold text-gray-800">
         {t('title')}
        </h1>
      </div>
      <div className="flex flex-wrap items-center overflow-x-auto overflow-y-hidden py-10 justify-center   bg-whiteOne text-gray-800">
        <Link
          to="/category"
          exact="true"
          active="true"
          className="flex items-center flex-shrink-0 px-5 py-3 space-x-2text-gray-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
          </svg>
          <span>Architecto</span>
        </Link>
        <a
          href="/"
          className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 rounded-t-lg text-gray-900"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
          </svg>
          <span>Corrupti</span>
        </a>
        <a
          href="/"
          className="flex items-center flex-shrink-0 px-5 py-3 space-x-2  text-gray-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
          <span>Excepturi</span>
        </a>
        <a
          href="/yourCard"
          className="flex items-center flex-shrink-0 px-5 py-3 space-x-2  text-gray-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <circle cx={12} cy={12} r={10} />
            <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
          </svg>
          <span>Consectetur</span>
        </a>
      </div>
      <section className="bg-whiteOne flex flex-wrap justify-evenly">
        {PRODUCTS.map((list) => (
          <Product key={list.id} product={list} />
        ))}
      </section>
      </AnimatePage>
    </>
  );
}
export default Home;
