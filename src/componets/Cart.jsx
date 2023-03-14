import React from "react";
import { useContext } from "react";
import { PRODUCTS } from "../assets/PRODUCTS";
import { ShopContext } from "../context/Shop-Context";
import CartItems from "./CartItems";
import { Link, useNavigate } from "react-router-dom";
import { BsCartX } from "react-icons/bs";
import "./css_files/cartItem.css";
import AnimatePage from "../animation/AnimatePage";
import { useTranslation } from 'react-i18next';

const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  return (
    <AnimatePage>
    <section className="inline items-center mb-20">
      <h1 className="text-center text-2xl text-[#4466f2] font-['Pacifico'] p-20">
       {t('yourCart')}
      </h1>
      <div className="cartItems items-center">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItems key={product.id} product={product} />;
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <>
          <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
            <div className="flex justify-between text-base font-medium text-gray-900">
              <p>{t('total')}</p>
              <p>{totalAmount} {t('MAD')}</p>
            </div>
            <p className="mt-0.5 text-sm text-gray-500">
              {t('tax')}
            </p>
            <div className="mt-6">
              <Link
                to='/checkout'
                className="flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-6 py-3  font-medium text-white shadow-sm hover:bg-blue-700"
              >
               {t('Checkout')}
              </Link>
            </div>
            <div className="mt-6 flex justify-center text-center text-sm text-gray-500 mb-20">
              <p>
                {t('or')}
                <button
                  type="button"
                  className="font-medium text-blue-600 hover:text-blue-500"
                  onClick={() => navigate("/")}
                >
                  {t('continue')}
                  <span aria-hidden="true"> →</span>
                </button>
              </p>
            </div>
          </div>
        </>
      ) : (
        <div className="grid justify-center text-center mb-20">
          <BsCartX className="text-[#4466f2] ml-28 m-8" size={56} />
          <strong className="text-[#4466f2] text-xl">
           {t('emptyCart')}
          </strong>
          <h4 className="text-gray-600 p-2">
            {t('addSomeThings')}
          </h4>
          <a
            href="/"
            className="btn btn-primary cart-btn-transform m-3 text-white font-semibold"
            data-abc="true"
          >
           {t('addProductToCart')}
          </a>
        </div>
      )}
    </section>
    </AnimatePage>
  );
};

export default Cart;
