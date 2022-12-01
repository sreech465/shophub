const initState = {
    products: [
          {
            _id: "1",
            name: "Nike Air Max 270 to Chuck Taylors",
            description:
              "Nike's Air Force 1s were among the most popular sneakers this year.",
            image: "/images/shoe1.png",
            thumbnails: [
              "/images/shoe2.png",
              "/images/shoe3.png",
              "/images/shoe4.png"
            ],
            brand: "Nike",
            price: "$336.00",
            rating: "4.5",
            reviews: "60",
            colors: ["#f0969e", "#d5d5d4", "#1e1e1e", "#cb141a"],
            sizes: [41, 42, 43, 44, 45, 46, 47, 48],
            addToCart:false
          },
          {
            _id: "2",
            name: "Nike Air Force 1",
            description:
              "Nike's Air Force 1s were among the most popular sneakers this year.",
            image: "/images/shoe2.png",
            thumbnails: [
              "/images/shoe1.png",
              "/images/shoe3.png",
              "/images/shoe4.png"
            ],
            brand: "Nike",
            price: "$300.00",
            rating: "3.5",
            reviews: "60",
            colors: ["#d5d5d4","#f0969e", "#1e1e1e", "#cb141a"],
            sizes: [41, 42, 43, 44,45,46,47,48],
            addToCart:false
          },
          {
            _id: "3",
            name: "Nike Air Max 95",
            description:
              "Nike's Air Force 1s were among the most popular sneakers this year.",
            image: "/images/shoe3.png",
            thumbnails: [
              "/images/shoe1.png",
              "/images/shoe2.png",
              "/images/shoe4.png"
            ],
            brand: "Nike",
            price: "$400.00",
            rating: "4.5",
            reviews: "60",
            colors: ["#1e1e1e","#f0969e", "#d5d5d4", "#cb141a"],
            sizes: [41, 42, 43, 44,45],
            addToCart:false
          },
          {
            _id: "4",
            name: "Nike Air Max 97",
            description:
              "Nike's Air Force 1s were among the most popular sneakers this year.",
            image: "/images/shoe4.png",
            thumbnails: [
              "/images/shoe1.png",
              "/images/shoe2.png",
              "/images/shoe3.png"
            ],
            brand: "Nike",
            price: "$500.00",
            rating: "4.5",
            reviews: "60",
            colors: [ "#cb141a","#f0969e", "#d5d5d4", "#1e1e1e"],
            sizes: [41, 42, 43, 44,45,47],
            addToCart:false
          }
    ],
    product: {}
}

const ProductsReducer = (state = initState,action) => {

    
    switch(action.type){
    
        case "PRODUCT":
            return {...state,product: state.products.find(product => product.id === parseInt(action.id))}
            
            default:
            return state; 
               
    }
}

export default ProductsReducer;


export const addItemToCart = (cartItems,cartItemToAdd) => {
    const existingCartItem = cartItems.find(
      cartItem => cartItem.id === cartItemToAdd.id
    );

    if(existingCartItem) {
      return cartItems.map(cartItem => 
        cartItem.id === cartItemToAdd.id
        ? {...cartItem,quantity:cartItem.quantity + 1}
        : cartItem
        
        )
    }
    
    return [...cartItems, {...cartItemToAdd,quantity: 1}];
}

export const increaseQuan = (cartItems,cartItemToAdd) =>{
  console.log(cartItemToAdd)
    const existingCartItem = cartItems.map(cartItem => {
      if(cartItem.id === cartItemToAdd.id){
        return {...cartItems,quantity: cartItem.quantity + 1}
      }
      return cartItem;
    })
    return existingCartItem;
}

export const decreaseQuan = (cartItems,cartItemToAdd) =>{
  const existingCartItem = cartItems.map(cartItem =>{
    if(cartItem.id === cartItemToAdd.id){
      return {...cartItems,quantity:cartItem.quantity - 1}
    }
    return cartItem;
  })
  return existingCartItem;
}

export const deleteProduct = (cartItems,cartItemToAdd) =>{
  return cartItems.filter(cartItem =>cartItem.id !== cartItemToAdd.id)
}