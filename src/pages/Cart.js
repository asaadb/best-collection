import { Button, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext, useEffect, useState } from "react";
import { CartContext, ProductsContext } from "../contexts/Contexts";

const Cart = () => {
  const { products } = useContext(ProductsContext);
  const { cart, handlleAddToCart, handleDeleteFromCart, handleRemoveFromCart } =
    useContext(CartContext);
  let total = 0;

  return (
    <Stack spacing={4} width="100%" mb="100px">
      <Typography
        variant="h2"
        mt="30px"
        mb="30px"
        sx={{
          fontSize: { lg: "60px", xs: "40px" },
        }}
      >
        Shopping Cart
      </Typography>
      {cart.length ? (
        cart.map((product) => {
          let item = products.find((i) => i.id === product.productId);
          total += item.price * product.quantity;

          return (
            <Box
              key={product.productId}
              boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
              p="10px"
            >
              <Stack
                maxWidth="800px"
                mr="auto"
                ml="auto"
                alignItems="center"
                sx={{
                  flexDirection: { lg: "row", sm: "row", xs: "column" },
                  gap: "50px",
                }}
              >
                <img
                  src={item.image}
                  style={{
                    width: "150px",
                    hieght: " 150px",
                  }}
                />
                <Stack spacing={1} maxWidth="300x">
                  <Typography variant="h3" fontSize="25px" fontWeight={700}>
                    {item.title}
                  </Typography>
                  <Typography
                    variant="h3"
                    fontSize="18px"
                    sx={{
                      textAlign: { lg: "left", sm: "left", xs: "center" },
                    }}
                    fontWeight={700}
                  >
                    {product.quantity} x {item.price} = $
                    {product.quantity * item.price}
                  </Typography>
                  <Stack
                    direction="row"
                    spacing={2}
                    sx={{
                      justifyContent: {
                        lg: "start",
                        sm: "start",
                        xs: "center",
                      },
                    }}
                  >
                    <Button
                      variant="outlined"
                      sx={{
                        borderColor: "black",
                        color: "black",
                      }}
                      onClick={() => {
                        handlleAddToCart(product);
                      }}
                    >
                      +
                    </Button>
                    <Button
                      variant="outlined"
                      sx={{
                        borderColor: "black",
                        color: "black",
                      }}
                      onClick={() => {
                        if (product.quantity > 1) {
                          handleRemoveFromCart(product);
                        } else {
                          handleDeleteFromCart(product);
                        }
                      }}
                    >
                      -
                    </Button>
                    <Button onClick={() => handleDeleteFromCart(product)}>
                      Delete
                    </Button>
                  </Stack>
                </Stack>
              </Stack>
            </Box>
          );
        })
      ) : (
        <Typography
          variant="h4"
          textAlign="center"
          sx={{
            backgroundColor: "#eaeded",
            p: "20px",
          }}
        >
          Your Cart is empty
        </Typography>
      )}
      <Typography
        variant="h5"
        width="100%"
        p="1rem"
        boxShadow="rgba(0, 0, 0.2, 0.24) 0px 3px 8px"
        sx={{
          position: "fixed",
          bottom: "0",
          backgroundColor: "white",
        }}
      >
        Total: ${total}
      </Typography>
    </Stack>
  );
};

export default Cart;
