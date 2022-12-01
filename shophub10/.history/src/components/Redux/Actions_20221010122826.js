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
export const Increment = (id) => {
  console.log(id);
  return {
    type: "INCREMENT",
    payload: id,
  };
};

export const Decrement = (id) => {
  return {
    type: "DECREMENT",
    payload: id,
  };
};

export const Remove = (id) => {
  return {
    type: "DELETE",
    payload: id,
  };
};
