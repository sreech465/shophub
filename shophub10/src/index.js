import { StrictMode } from "react";
import ReactDOM from "react-dom";
import fontawesome from "./fontawesome";
import { Provider } from 'react-redux';
import App from "./App";
import store from "./components/Redux/Store";
const rootElement = document.getElementById("root");
ReactDOM.render(
  
  <StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </StrictMode>,
  rootElement
 
  
);
