import data from "../../data";

const initState = {
  cart: [],
  cartItems: [],
  totalPrice: 0,
  totalQuantities: 0,
};

const cartReducer = (state = initState, action) => {
  const { type, payload } = action;
  console.log(action, "action is work");
  switch (action.type) {
    case "ADD_TO_CART":
      console.log(action.payload, "data is coming");
      const qnt = { quantity: 1 };
      return {
        ...state,
        cart: [...state.cart, Object.assign(payload, qnt)],
      };

    case "INCREMENT":
      //console.log(action.payload, "data is increases")
      let Inces = state.cart.map((product) => {
        if (product === action.payload) {
          return { ...product, quantity: product.quantity + 1 };
        }
        return product;
      });
      return {
        ...state,
        cart: Inces,
      };

    case "DECREMENT":
      //console.log(action.payload, "data is decreses")
      let Dinces = state.cart.map((product) => {
        if (product === action.payload) {
          return {
            ...product,
            quantity: product.quantity > 1 ? product.quantity - 1 : 1,
          };
        }
        return product;
      });
      return {
        ...state,
        cart: Dinces,
      };

    case "DELETE":
      let deleteItem = [
        ...state.cart.filter((item, index) => item != action.payload),
      ];
      return {
        ...state,
        cart: deleteItem,
      };

    default:
      return state;
  }
};

export default cartReducer;
