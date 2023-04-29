import { createSlice } from "@reduxjs/toolkit";
import productData from "../productData";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialState = {
  cart: [],
  items: productData,
  totalQuantity: 0,
  totalPrice: 0,
  product: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      toast.success("your product was added successfully");
      let find = state.cart.findIndex((item) => item.id === action.payload.id);
      if (find >= 0) {
        state.cart[find].quantity += 1;
      } else {
        state.cart.push(action.payload);
      }
    },

    getCartTotal: (state) => {
      let { totalQuantity, totalPrice } = state.cart.reduce(
        (cartTotal, cartItem) => {
          console.log("carttotal", cartTotal);
          console.log("cartitem", cartItem);
          const { price, quantity } = cartItem;
          console.log(price, quantity);
          const itemTotal = price * quantity;
          cartTotal.totalPrice += itemTotal;
          cartTotal.totalQuantity += quantity;
          return cartTotal;
        },
        {
          totalPrice: 0,
          totalQuantity: 0,
        }
      );
      state.totalPrice = parseInt(totalPrice.toFixed(2));
      state.totalQuantity = totalQuantity;
    },

    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    increaseItemQuantity: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    },
    decreaseItemQuantity: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
    },
    productDetail: (state, action) => {
      state.product = [];
      state.product.find((item) => item.id === action.payload.id);
      state.product.push(action.payload);
    },
    productIncrease: (state, action) => {
      state.product = state.product.map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    },
    productDecrease: (state, action) => {
      state.product = state.product.map((item) => {
        if (item.id === action.payload && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
    },
    filterCategory: (state, action) => {
      const result = state.items.filter((index) => {
        return index.category === action.payload;
      });
      state.product = result;
    },
  },
});

export const {
  addToCart,
  getCartTotal,
  removeFromCart,
  increaseItemQuantity,
  decreaseItemQuantity,
  productDetail,
  productIncrease,
  productDecrease,
  filterCategory,
} = cartSlice.actions;

export default cartSlice.reducer;
