import React from "react";
import data from "../../data";
import ProductsHeader from "./ProductsHeader";
import ProductCard from "./ProductCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useHistory } from "react-router-dom";
import ProductCategory from "./ProductCategory";
import { useSelector } from "react-redux";

// function Product(props) {
//   return (
//     <div className="products">
//       <ProductsHeader />
//       <div className="products-container">
//         <div className="product-cards" dir="ltr">
//           {data.products.map((product) => (
//             <ProductCard product={product} />
//           ))}
//         </div>
//       </div>
//       <div className="related-products">
//         <div className="related-products-header">
//           <h1>Related Products</h1>
//         </div>
//         <div className="related-products-card">
//           {data.products.map((product) => (
//             <ProductCard product={product} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
function Product(props) {
  const select = useSelector(state => state.cartReducer.sortingProducts)
  console.log(select, "ooooooooooooooooo")
  const history = useHistory();
  const state = useSelector(state => state.cartReducer.login);
  if (state.status !== 200) {
    history.push("/login")
  }
  return (
    <>
    
      <ProductCategory />
      
      <div className="product-container row row-cols-2 row-cols-lg-5 g-2 g-lg-3 mt-3 ms-3">
        

        {
          select.map(d => (
            <div className="product-card col" key={d.id}>
              <div className="product-header">
                <Link to={"/shop/" + d.id}>
                  <div className="product-maximize">
                    <FontAwesomeIcon icon={["fas", "expand-arrows-alt"]} size="2x" />
                  </div>
                </Link>
                <Link to="/cart">
                  <span className="product-add-to-cart">
                    <FontAwesomeIcon icon={["fas", "shopping-bag"]} />
                  </span>
                </Link>
              </div>
              
              <div className="product-image">
                <div
                  className="background-design"
                >
                  <div className="circle"></div>
                </div>
                <figure>
                  <img src={d.image} alt="product-img" width="220" height="93" />
                </figure>
              </div>
              <div className="product-name">
                <p>{d.title}</p>
              </div>
              <div className="product-price">{d.price}</div>
            </div>
           
          ))
        }
      </div>
      
    </>
  );
}

export default Product;
