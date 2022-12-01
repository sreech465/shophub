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
      return {
        ...state,
        cart: [
          ...state.cart,
          { id: action.payload.productId, quantity: action.payload.quantity },
        ],
      };

    case "INCREMENT":
      //console.log(action.payload, "data is increases")

      const itemIncrement = state.cart.find(
        (product) => product.id === action.payload
      );
      console.log(itemIncrement, "mahesh");
      itemIncrement.quantity++;
      state.totalQuantities++;
      return {
        ...state,
      };

    case "DECREMENT":
      //console.log(action.payload, "data is decreses")
      let itemDecrement = state.cart.find(
        (product) => product.id === action.payload
      );
      console.log(itemDecrement);
      itemDecrement.quantity--;
      state.totalQuantities--;
      return {
        ...state,
      };

    case "DELETE":
      let deleteItem = state.cart.filter(
        (item, index) => item != action.payload
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
