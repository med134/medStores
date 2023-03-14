import React from "react";
import { useContext } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";
import "./css_files/showProduct.css";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/Shop-Context";
import { PRODUCTS } from "../assets/PRODUCTS";


const ShowProduct = (props) => {
  const title = props.title;
  const { removeFromCart, cartItems, addToCart } = useContext(ShopContext);
  return (
    <section className="flex justify-center p-32">
      <div className=" flex text-center text-xl font-semibold p-10 text-tb">
        <div className="w-96 border h-96 rounded-xl">
          <img alt="pro_photo" width={200} className="ml-[22%]" />
        </div>
        <div className="inline p-3 ml-12">
          <div className="btn hover:bg-slate-100 items-center cursor-pointer">
            <AiOutlineArrowLeft className="text-tb text-xl" />
            <Link to="/" active="true" className="ml-3">
              Back To All Product
            </Link>






          </div>
          {PRODUCTS.map((product)=>{
              if(cartItems[product.id] !== 0){
                    return <Show key={product.id} data={product} />
              }
          })}
          








          <div className="btnAddToCard bg-blue-600 items-center space-x-4 hover:bg-blue-700 cursor-pointer">
            <Link to=""> Add To Cart</Link>
            <BsCartCheck className="ml-3" size={"2em"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowProduct;
