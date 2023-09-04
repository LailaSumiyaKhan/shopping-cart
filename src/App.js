import { useState } from "react";
import Product from "./components/Product";
import ProductList from "./components/ProductList";
import SwipeableTemporaryDrawer from "./components/SwipeableTemporaryDrawer";
import { products } from "./data/products";

function App() {
  const [state, setState] = useState({
    cartProducts: [],
    listProducts: products,
    prodsInCart: 0,
    totalPrice: 0,
    uniqueId: 0,
  });

  function addToCart(product) {
    let newCartProducts = state.cartProducts.slice();
    newCartProducts.push(product);
    const prodsInCart = newCartProducts.length;
    const totalPrice = state.totalPrice + product.price;
    const uniqueId = state.uniqueId + 1;
    setState({
      ...state,
      cartProducts: newCartProducts,
      prodsInCart,
      totalPrice,
      uniqueId,
    });
  }

  function removeFromCart(product) {
    console.log(product.id);
    const cartProductsCopy = state.cartProducts.slice();
    const cartProducts = cartProductsCopy.filter(
      (prod) => prod.id !== product.id
    );
    const prodsInCart = cartProducts.length;
    const totalPrice = state.totalPrice - product.price;
    setState({
      ...state,
      cartProducts,
      prodsInCart,
      totalPrice,
    });
  }

  return (
    <>
      <SwipeableTemporaryDrawer
        cartProducts={state.cartProducts}
        prodsInCart={state.prodsInCart}
        removeFromCart={removeFromCart}
        totalPrice={state.totalPrice}
      />
      <ProductList
        addToCart={addToCart}
        listProducts={state.listProducts}
        uniqueId={state.uniqueId}
      />
    </>
  );
}

export default App;
