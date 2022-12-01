import React, { useRef, useState } from "react";
import ProductCard from "./ProductCard";
import data from "../../data";
import Rating from "./Rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { addToCart } from "../Redux/Actions";
import { addItemToCart } from "../Redux/ProductsReducer";
import axios from "axios";

function ProductPage(props) {
  let productIndex = props.match.params.id ? props.match.params.id - 1 : 0;
  const [cart, setCart] = useState({
    productId: productIndex,
    color: "",
    size: "",
    quantity: 1,
  });
  const dispatch = useDispatch();
  const { productId, color, size } = cart;
  console.log(cart);

  const { id } = useParams();

  const productIds = id;
  console.log(productIds);

  useEffect(() => {
    dispatch({ type: "PRODUCT", id });
  }, [id]);
  console.log(id);
  // const { products } = useSelector((state) => state.ProductsReducer);
  // console.log(products, "kkkk");

  const handleSelection = (e) => {
    setCart({ ...cart, [e.target.name]: e.target.value });
    console.log(cart);
  };
  const imageRef = useRef();
  const changeImage = (e) => {
    const currentImgSrc = imageRef.current.src;
    imageRef.current.src = e.target.src;
    e.target.src = currentImgSrc;
    // e.target.style.background="red";
  };
  const selectColor = useRef([]);
  selectColor.current = data.products[productId].colors.map((ref, index) => {
    return (selectColor.current[index] = React.createRef());
  });

  const selectSize = useRef([]);
  selectSize.current = data.products[productId].sizes.map((ref, index) => {
    return (selectSize.current[index] = React.createRef());
  });
  const handleCartSubmit = (e) => {
    e.preventDefault();
    dispatch(addToCart(cart));
    console.log(cart);
  };

  const canCheckout = [color, size].every(Boolean);
  return (
    <div className="ProductPage">
      <div className="products-hero-design">
        <div className="ripple-design">
          <div className="ripple-circle very-small shade0"></div>
          <div className="ripple-circle small shade1"></div>
          <div className="ripple-circle medium shade2"></div>
          <div className="ripple-circle large shade3"></div>
        </div>
        <div className="products-nav">
          <p className="breadCrump">
            <span className="home-link">Home</span> / Product Details
          </p>
          <h3 className="title">Product Details</h3>
          <div className="previous-next-buttons">
            {productId >= 1 ? (
              <div
                onClick={() => setCart({ ...cart, productId: productId - 1 })}
                className="left-arrow"
              >
                <FontAwesomeIcon
                  icon={["fas", "chevron-left"]}
                  size="2x"
                  aria-hidden="true"
                />
              </div>
            ) : null}
            {productId < 3 ? (
              <div
                onClick={() => setCart({ ...cart, productId: productId + 1 })}
                className="right-arrow"
              >
                <FontAwesomeIcon
                  icon={["fas", "chevron-right"]}
                  size="2x"
                  aria-hidden="true"
                />
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <div className="product-details-container">
        <div className="product-details-card">
          <div className="product-detail-left-container">
            <div className="product-details-name">
              <p>{data.products[productId].name}</p>
            </div>
            <div className="product-details-description">
              <p>{data.products[productId].description}</p>
            </div>
            <div className="product-image-thumbnails">
              {data.products[productId].thumbnails.map((thumbnail, index) => {
                return (
                  <div className="product-image-thumbnail">
                    <img
                      src={thumbnail}
                      // width="50"
                      // height="21"
                      width="95"
                      height="40"
                      alt="thumbnails"
                      onClick={changeImage}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="product-detail-middle-container">
            <div className="product-image-gallery">
              <img
                ref={imageRef}
                src={data.products[productId].image}
                // width="150"
                // height="63"
                width="265"
                height="111"
                alt="product-gallery"
              />
            </div>
            <div className="product-detail-price">
              <span>$336.00</span>
            </div>
          </div>
          <div className="product-detail-right-container">
            <span className="review-heading">Reviews:</span>
            <Rating
              rating={data.products[productId].rating}
              reviews={data.products[productId].reviews}
            />
            <div className="product-detail-color">
              <span>Select Color:</span>
              <div className="shoe-colors">
                {data.products[productId].colors.map((color, index) => {
                  return (
                    <label key={color} htmlFor={"color" + index}>
                      <input
                        onChange={handleSelection}
                        type="radio"
                        id={"color" + index}
                        value={color}
                        name="color"
                        ref={selectColor.current[index]}
                      />
                      <div
                        style={{ background: color }}
                        className="colors"
                      ></div>
                    </label>
                  );
                })}
              </div>
            </div>
            <div className="product-detail-size">
              <span>Select Size:</span>
              <div className="sizes">
                {data.products[productId].sizes.map((size, index) => {
                  return (
                    <label key={size} htmlFor={"size" + index}>
                      <input
                        onChange={handleSelection}
                        type="radio"
                        id={"size" + index}
                        value={size}
                        name="size"
                        ref={selectSize.current[index]}
                      />
                      <div className="size-box">{size}</div>
                    </label>
                  );
                })}
              </div>
            </div>
            <div className="product-detail-add-to-cart-btn">
              <button onClick={handleCartSubmit} disabled={!canCheckout}>
                Add to cart
              </button>
            </div>
          </div>
        </div>
        {/* related products */}
        <div className="related-products">
          <div className="related-products-header">
            <h1>Related Products</h1>
          </div>
          <div className="related-products-card">
            {data.products.map((product) => (
              <ProductCard product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// function ProductPage(props) {
//   let productIndex = props.match.params.id ? props.match.params.id - 1 : 0;
//   const [cart, setCart] = useState([{}]);

//   const cartData = useSelector((state) => state.cartReducer.cart);
//   console.log(cartData, "saaaa qnt");
//   const [loading, setLoading] = useState(true);
//   const dispatch = useDispatch();
//   const { id } = useParams();
//   const getOneProduct = async () => {
//     axios
//       .get(`https://fakestoreapi.com/products/${id}`)

//       .then((res) => {
//         console.log(res.data);

//         setCart(res.data);
//         setLoading(false);
//       });
//   };
//   console.log(cart, "single usestate");
//   useEffect(() => {
//     getOneProduct();
//   }, []);
//   console.log(id);

//   const handleCartSubmit = (e, products) => {
//     dispatch(addToCart(cart));
//   };

//   return (
//     <div className="ProductPage">
//       <div>
//         <div className="products-hero-design">
//           <div className="ripple-design">
//             <div className="ripple-circle very-small shade0"></div>
//             <div className="ripple-circle small shade1"></div>
//             <div className="ripple-circle medium shade2"></div>
//             <div className="ripple-circle large shade3"></div>
//           </div>
//           <div className="products-nav">
//             <p className="breadCrump">
//               <span className="home-link">Home</span> / Product Details
//             </p>
//             <h3 className="title">Product Details</h3>
//             <div className="previous-next-buttons">
//               <div className="left-arrow">
//                 <FontAwesomeIcon
//                   icon={["fas", "chevron-left"]}
//                   size="2x"
//                   aria-hidden="true"
//                 />
//               </div>

//               <div className="right-arrow">
//                 <FontAwesomeIcon
//                   icon={["fas", "chevron-right"]}
//                   size="2x"
//                   aria-hidden="true"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="product-details-container">
//           <div className="product-details-card">
//             <div className="product-detail-left-container">
//               <div className="product-details-name">
//                 <p>{cart?.title}</p>
//               </div>
//               <div className="product-details-description">
//                 <p>{cart?.description}</p>
//               </div>
//               <div className="product-image-thumbnails"></div>
//             </div>
//             <div className="product-detail-middle-container">
//               <div className="product-image-gallery">
//                 <img
//                   // ref={imageRef}
//                   src={cart?.image}
//                   // width="150"
//                   // height="63"
//                   width="265"
//                   height="111"
//                   alt="product-gallery"
//                 />
//               </div>
//               <div className="product-detail-price">
//                 <span>${cart?.price}</span>
//               </div>
//             </div>
//             <div className="product-detail-right-container">
//               <div className="product-detail-add-to-cart-btn">
//                 <button onClick={handleCartSubmit}>Add to cart</button>
//               </div>
//             </div>
//           </div>
//           related products
//           <div className="related-products">
//             <div className="related-products-header">
//               <h1>Related Products</h1>
//             </div>
//             <div className="related-products-card">
//               {data.products.map((product) => (
//                 <ProductCard product={product} />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

export default ProductPage;
