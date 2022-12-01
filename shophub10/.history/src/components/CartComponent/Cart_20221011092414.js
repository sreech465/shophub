import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import data from "../../data";
import { Decrement, Increment, Remove } from "../Redux/Actions";

import axios from "axios";

// function Cart(props) {
//   const cartdata = useSelector((state) => state.cartReducer.cart);
//   console.log(cartdata);

//   // const { products } = useSelector((state) => state.ProductsReducer);
//   // console.log(products, "kkkk");

//   const dispatch = useDispatch();
//   // const [quantity, setQuantity] = useState(1);
//   // console.log(cartdata, "data");

//   let totalPrice = 0;
//   let totalQuantity = 0;
//   let pp = 0;
//   let pr = 0;

//   cartdata.forEach(cartLogo);

//   function cartLogo(logo) {
//     let priceOfProduct = data.products[logo.id].price;
//     console.log(priceOfProduct);
//     console.log(logo.price, logo.id, "ooooooooooooo");
//     pp = priceOfProduct.substring(1) * logo.quantity;
//     pr = priceOfProduct.substring(1);
//     totalPrice = totalPrice + pp;
//     totalQuantity = totalQuantity + logo.quantity;
//     console.log(totalPrice);
//   }

//   const [card, setCard] = useState(false);
//   console.log(card);

//   return (
//     <div>
//       <div className="cart-wrapper noselect">
//         <div className="cart-header">
//           <h3>Shopping Cart</h3>
//         </div>
//         <div className="cart-list">
//           <ul>
//             {cartdata &&
//               cartdata.length > 0 &&
//               cartdata?.map((item, index) => {
//                 let qty = item.quantity;
//                 console.log(qty);
//                 let price = data.products[item.id].price;
//                 console.log(price);
//                 let pp = price.substring(1);
//                 console.log(pp);
//                 let itemPrice = qty * pp;
//                 console.log(itemPrice);
//                 return (
//                   <>
//                     <li className="cart-item">
//                       <div className="cart-item-img">
//                         <img
//                           src={data.products[item.id].image}
//                           width="90"
//                           height="38"
//                           alt="cart item"
//                         />
//                       </div>
//                       <div className="cart-item-name">
//                         <span>{data.products[item.id].name} </span>
//                       </div>
//                       <div className="cart-item-qty">
//                         {item.quantity > 1 ? (
//                           <span onClick={() => dispatch(Decrement(item.id))}>
//                             <FontAwesomeIcon icon={["fas", "minus"]} />
//                           </span>
//                         ) : (
//                           <span
//                             onClick={() => dispatch(Remove(item.id))}
//                             className="cart-delete-item"
//                           >
//                             <FontAwesomeIcon icon={["far", "trash-alt"]} />
//                           </span>
//                         )}
//                         <input type="number" value={item.quantity} disabled />
//                         <span onClick={() => dispatch(Increment(item.id))}>
//                           <FontAwesomeIcon icon={["fas", "plus"]} />
//                         </span>
//                       </div>

//                       <h4 style={{ paddingTop: 30 }}>
//                         {~~data.products[item.id].price.replace("$", "")}*
//                         {item.quantity}={itemPrice}
//                       </h4>
//                     </li>
//                   </>
//                 );
//               })}
//           </ul>
//         </div>
//         <div className="cart-checkout">
//           <div className="cart-total">
//             <h4>Total :</h4>
//             <span>{totalPrice}</span>
//           </div>
//           <div className="cart-shipping">
//             <h4>Shipping :</h4>
//             <span>Free Shipping</span>
//           </div>
//           <div className="cart-checkout-button">
//             <button onClick={() => setCard(true)}>Proceed to Checkout</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

function Cart(props) {
  const cartdata = useSelector((state) => state.cartReducer.cart);
  console.log(cartdata);

  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  console.log(cartdata, "data");

  let totalPrice = 0;
  let totalQuantity = 0;

  cartdata.forEach(cartLogo);

  function cartLogo(logo) {
    let priceOfProduct = data.products[logo.id].price;
    console.log(priceOfProduct);
    console.log(logo.price, logo.id, "ooooooooooooo");
    totalPrice = totalPrice + priceOfProduct.substring(1) * logo.quantity;
    totalQuantity = totalQuantity + logo.quantity;
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

  console.log(cartdata, "data");
  const [card, setCard] = useState(false);
  console.log(card);
  return (
    <div>
      <div className="cart-wrapper noselect">
        <div className="cart-header">
          <h3>Shopping Cart</h3>
        </div>
        <div className="cart-list">
          <ul>
            {cartdata &&
              cartdata.length > 0 &&
              cartdata.map((item, index) => (
                <li className="cart-item">
                  <div className="cart-item-img">
                    <img
                      src={item.image}
                      width="90"
                      height="38"
                      alt="cart item"
                    />
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
                      <span
                        onClick={() => dispatch(Remove(item))}
                        className="cart-delete-item"
                      >
                        <FontAwesomeIcon icon={["far", "trash-alt"]} />
                      </span>
                    )}
                    <input type="number" value={item.quantity} disabled />
                    <span onClick={() => dispatch(Increment(item))}>
                      <FontAwesomeIcon icon={["fas", "plus"]} />
                    </span>
                  </div>

                  <div className="cart-item-price">
                    {item.price} *{item.quantity}
                  </div>
                </li>
              ))}
          </ul>
        </div>
        <div className="cart-checkout">
          <div className="cart-total">
            <h4>Total :</h4>
            <span>{totalPrice}</span>
          </div>
          <div className="cart-shipping">
            <h4>Shipping :</h4>
            <span>Free Shipping</span>
          </div>
          <div className="cart-checkout-button">
            <button onClick={() => setCard(true)}>Proceed to Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
