import axios from "axios";

import data from "../../data";

export const addToCart = (data) => {
  console.log(data);
  //console.log(quantity);

  return {
    type: "ADD_TO_CART",
    payload: data,
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
