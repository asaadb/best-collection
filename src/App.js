import React from "react";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import { useState } from "react";
import { productsUrl, categoriesUrl } from "./utils/dataUrls";
import NotFound from "./pages/NotFound";
import { ProductsContext, CartContext } from "./contexts/Contexts";
import useData from "./hooks/useData";

const App = () => {
  const {
    data: products,
    error: productsError,
    isLoading: productsLoading,
  } = useData(productsUrl);
  const {
    data: categories,
    error: categoriesError,
    isLoading: categoriesLoading,
  } = useData(categoriesUrl);
  const [cart, setCart] = useState([]);

  function handlleAddToCart(item) {
    if (cart.length && cart.find((t) => t.productId === item.productId)) {
      setCart(
        cart.map((i) => {
          if (i.productId === item.productId) {
            return { ...i, quantity: i.quantity + 1 };
          } else {
            return i;
          }
        })
      );
    } else {
      setCart([...cart, item]);
    }
  }

  function handleDeleteFromCart(item) {
    setCart(cart.filter((i) => i.productId !== item.productId));
  }

  function handleRemoveFromCart(item) {
    setCart(
      cart.map((t) => {
        if (t.productId === item.productId) {
          return { ...t, quantity: t.quantity - 1 };
        } else {
          return t;
        }
      })
    );
  }

  return (
    <Box>
      <ProductsContext.Provider
        value={{
          products,
          categories,
          productsError,
          categoriesError,
          productsLoading,
          categoriesLoading,
        }}
      >
        <CartContext.Provider
          value={{
            cart,
            handleDeleteFromCart,
            handleRemoveFromCart,
            handlleAddToCart,
          }}
        >
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </CartContext.Provider>
      </ProductsContext.Provider>
    </Box>
  );
};

export default App;
