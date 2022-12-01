import axios from "axios";

import data from "../../data";

export const addToCart = (cart) => {
  console.log(cart);
  //console.log(quantity);

  return {
    type: "ADD_TO_CART",
    payload: cart,
  };
};
console.log(data);
export const Increment = (data, id) => {
  console.log(data);
  return {
    type: "INCREMENT",
    payload: data,
  };
};

export const Decrement = (data, id) => {
  return {
    type: "DECREMENT",
    payload: data,
  };
};

export const Remove = (data) => {
  return {
    type: "DELETE",
    payload: data,
  };
};
