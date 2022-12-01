import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import data from "../../data";
import { Decrement, Increment, Remove } from "../Redux/Actions";
import Stripe from "./Stripe";
import StripeCheckout from 'react-stripe-checkout';
import axios from "axios";

function Cart(props) {
  

  const cartdata = useSelector((state) => state.cartReducer.cart)
  console.log(cartdata);

  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  console.log(cartdata,"data")
  
  let totalPrice = 0;
  let totalQuantity = 0;
  
  cartdata.forEach(cartLogo);
  
  function cartLogo(logo) {
    let priceOfProduct = data.products[logo.id].price;
    console.log(priceOfProduct);
    console.log(logo.price,logo.id,"ooooooooooooo")
    totalPrice = totalPrice + priceOfProduct.substring(1) * logo.quantity ; 
    totalQuantity = totalQuantity + logo.quantity ;
    console.log(totalPrice);
  }

  // const [product] = useState({
  //   name: "Sample Game",
  //   price: totalPrice,
  //   description: "This is a sample game" 
  // })

  // async function handleToken(token,addresses){
  //   const response = await axios.post(`http://localhost:4000/payment`,{token,product})
    
  //   console.log(response)

  //   if(response.status === 200){
  //     alert("Payment Successfully Done");
  //   }


  
  // } 
  
 console.log(cartdata,"data");
 const [card,setCard]=useState(false);
 console.log(card);
  return (
    <div>
      {card ? <Stripe /> :
    <div className="cart-wrapper noselect">
      <div className="cart-header">
        <h3>Shopping Cart</h3>
      </div>
      <div className="cart-list">
        
        <ul>
          {cartdata && cartdata.length > 0 && cartdata.map((item, index) => (
            
            <li className="cart-item">
              <div className="cart-item-img">
                <img src={item.image} width="90" height="38" alt="cart item" />
              </div>
              <div className="cart-item-name">
                <span>{item.name} </span>
              </div>
              <div className="cart-item-qty">
                {item.quantity > 1 ? (
                  <span onClick={() => dispatch(Decrement(item))}>
                    <FontAwesomeIcon icon={["fas", "minus"]} />
                  </span>
                ) : (
                  <span onClick={() => dispatch(Remove(item))} className="cart-delete-item">
                    <FontAwesomeIcon icon={["far", "trash-alt"]} />
                  </span>
                )}
                <input type="number" value={item.quantity} disabled />
                <span onClick={() => dispatch(Increment(item))}>
                  <FontAwesomeIcon icon={["fas", "plus"]} />
                </span>
              </div>
              
                <div className="cart-item-price">{item.price*item.quantity}</div>
              
              
            </li>
          ))}
        </ul>
      </div>
      <div className="cart-checkout">
        <div className="cart-total">
          <h4>Total :</h4>
          <span>{
            totalPrice
            }</span>
        </div>
        <div className="cart-shipping">
          <h4>Shipping :</h4>
          <span>Free Shipping</span>
        </div>
        <div className="cart-checkout-button">
          <button onClick={()=>setCard(true)}>Proceed to Checkout</button>

            {/* <StripeCheckout 
             className = "center"
             stripeKey="pk_test_51LngrTSII0os4BZPS9lKe4It2PXTFDduGlwTl3QLxkLDakcax9P281FmlENn8Nq4XgcaYV64QA6FdTqPy8goaKxn00QIqO6NQZ"
             token = {handleToken}
             amount = {product.price}
             name={product.name}
             billingAddress
             shippingAddress
             /> */}

        </div>
      </div>
    </div>
    }
    </div>
  );
}

export default Cart;
