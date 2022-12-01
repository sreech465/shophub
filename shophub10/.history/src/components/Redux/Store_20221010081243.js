import { createStore,combineReducers, applyMiddleware }from "redux";
//import {devToolsEnhancer}from "redux-devtools-extension";
import cartReducer from "./Reducers";
import ProductsReducer from "./ProductsReducer";
import thunk from "redux-thunk";

const root = combineReducers({
    ProductsReducer,
    cartReducer
});

const store = createStore(root,applyMiddleware(thunk));
export default store;