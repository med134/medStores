import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { BsSearch } from "react-icons/bs";
import { ToastContainer } from "react-toastify";
import { addToCart, productDetail } from "../feautres/cartSlice";
import { useNavigate } from "react-router";
import AnimatePage from "../animation/AnimatePage";
import SideBar from "./SideBar";

export default function Home() {
  const items = useSelector((state) => state.allCart.items);
  const [productFilter, setProductsFilter] = useState(items);
  const [selectValue, setSelectedValue] = useState();
  const [searchTerm, setSearchTerm] = useState("");
  const { t, i18n } = useTranslation();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(items);

  /* function for button show Details product */
  const showProductCard = (item) => {
    dispatch(productDetail(item));
    navigate("/productDetails");
  };
  const setAllCategory = () => {
    setProductsFilter(items);
  };
  /* function for filter category */
  const filterP = (cat) => {
    const result = items.filter((index) => {
      return index.category === cat;
    });
    setProductsFilter(result);
  };

  /* function filter data searching */
  const handleSelectChange = (e) => {
    const value = e.target.value;
    setSelectedValue(value);
    filterP(value);
    if (value === "all") {
      setProductsFilter(items);
    }
    console.log(value);
  };

  return (
    <>
      <AnimatePage>
        <section className="bg-white py-10 text-gray-700 sm:py-16 lg:py-8 font-['Cairo'] ">
          <div className="mx-auto max-w-screen-xl">
            {/* form search and category components small screens */}
            <form className="flex justify-center ml-2">
              <select
                defaultValue={"all"}
                id="countries"
                onChange={handleSelectChange}
                className="min-[676px]:hidden bg-gray-50 font-medium border border-gray-300 outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-44 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="all">{t("All Products")}</option>
                <option value="Phones" className="px-2">
                  {t("Phones & Tablets")}
                </option>
                <option value="Clothes"> {t("Clothes")}</option>
                <option value="laptop"> {t("Laptops")} </option>
                <option value="Accessories">{t("Accessoires")} </option>
                <option value="kitchen">{t("Home")} </option>
              </select>
              <div className="relative w-full ml-4 rounded-lg">
                <input
                  onChange={(e) => setSearchTerm(e.target.value)}
                  type="search"
                  name="search"
                  placeholder="Search"
                  className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg outline-blue-600  border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                />
                <button type="" className="absolute right-0 top-0 mt-2 mr-4">
                  <BsSearch className="text-blue-400 w-8 h-6 top-0 left-0 mb-4" />
                </button>
              </div>
            </form>

            {/* Side bar for category products */}
            <SideBar filterP={filterP} setAllCategory={setAllCategory} />

            {/* Show Data Products */}
            <div className="mt-6 ml-56 max-[676px]:ml-3 grid grid-cols-3 gap-1 md:grid-cols-4 sm:grid-cols-3 sm:gap-1 lg:mt-6 lg:grid-cols-5 lg:gap-1">
              {productFilter
                .filter((item) => {
                  if (searchTerm === "") {
                    return item;
                  } else if (
                    item.title.toLowerCase().includes(searchTerm.toLowerCase())
                  ) {
                    return item;
                  }
                })
                .map((item) => (
                  <article
                    key={item.id}
                    className="bg-slate-100 p-2 rounded-md w-74 h-92 object-contain "
                  >
                    <div className="aspect-square overflow-hidden">
                      <img
                        onClick={() => {
                          showProductCard(item);
                        }}
                        className="object-contain group-hover:scale-125 h-auto w-auto transition-all duration-300 cursor-pointer"
                        src={item.img}
                        alt="product_image"
                      />
                    </div>
                    <div className="mt-2 items-start">
                      <h3 className="cursor-pointer hover:text-blue-500 text-[18px] text-left">
                        {item.title}
                      </h3>

                      <div className="text-left">
                        <p className="inline-block text-xs font-semibold sm:text-sm md:text-base">
                          {item.price} {t("MAD")}
                          <del className="block text-xs text-blue-400">
                            {item.lastPrice} {t("MAD")}
                          </del>
                        </p>
                      </div>
                    </div>
                    <div className="relative w-full h-full">
                      <button
                        onClick={() => dispatch(addToCart(item))}
                        className="flex items-center justify-center bg-blue-600 sm:text-sm md:py-2 md:px-1 sm:py-2 sm:px-4 min-[319px]:py-1 text-xs min[580px]:text-xs px-2 max-[700px]:py-1 text-white transition hover:bg-blue-700 rounded-md"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="mr-2 h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                        </svg>
                        {t("addToCart")}
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
