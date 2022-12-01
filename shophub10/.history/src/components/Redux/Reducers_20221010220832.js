import data from "../../data";

const initState = {
  cart: [],
  totalPrice: 0,
  totalQuantities: 0,
  login: [],
  signUp: [],
  otp: [],
  sortingProducts: [],
};

const cartReducer = (state = initState, action) => {
  const { type, payload } = action;
  console.log(action, "action is work");
  switch (action.type) {
    case "ADD_TO_CART":
      console.log(action.payload, "data is coming");
      return {
        ...state,
        cart: [
          ...state.cart,
          { id: action.payload.productId, quantity: action.payload.quantity },
        ],
      };

    case "INCREMENT":
      //console.log(action.payload, "data is increases")

      const itemIncrement = state.cart.map((product) => {
        if (product.id === action.payload) {
          return { ...product, quantity: product.quantity + 1 };
        }
        return product;
      });

      return {
        ...state,
        cart: itemIncrement,
      };

    case "DECREMENT":
      //console.log(action.payload, "data is decreses")
      let itemDecrement = state.cart.map((product) => {
        if (product.id === action.payload) {
          return { ...product, quantity: product.quantity - 1 };
        }
        return product;
      });

      return {
        ...state,
        cart: itemDecrement,
      };

    case "DELETE":
      let deleteItem = state.cart.filter(
        (item, index) => item.id != action.payload
      );
      state.cart = deleteItem;
      state.totalQuantities--;
      return {
        ...state,
        ...state.cart,
      };

    default:
      return state;
  }
};

export default cartReducer;
