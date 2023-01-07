import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { Button, Stack, Typography, Box } from "@mui/material";
import Loader from "../components/Loader";
import { CartContext, ProductsContext } from "../contexts/Contexts";
import NotFound from "./NotFound";

const ProductDetail = ({ isLoading }) => {
  const { id } = useParams();
  const { handlleAddToCart } = useContext(CartContext);
  const { products } = useContext(ProductsContext);

  const product = products.find((item) => item.id === Number(id));
  console.log(product);
  return (
    <Box m="auto" p="45px" maxWidth="1000px">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {product ? (
            <Stack
              gap="30px"
              justifyContent="center"
              alignItems="center"
              direction={{ lg: "row", md: "row", xs: "column" }}
            >
              <Box maxWidth={{ xs: "70%" }}>
                <img src={product.image} alt={product.title} width="100%" />
              </Box>
              <Stack spacing={2} maxWidth="650px">
                <Typography
                  variant="h4"
                  color="#878787"
                  sx={{ fontSize: { lg: "35px", xs: "25px" } }}
                >
                  {product.category.toUpperCase()}
                </Typography>
                <Typography
                  variant="h2"
                  color="#2a2a2b"
                  fontWeight={400}
                  sx={{ fontSize: { lg: "45px", xs: "35px" } }}
                >
                  {product.title}
                </Typography>
                <Typography
                  variant="h4"
                  fontWeight={700}
                  sx={{
                    fontSize: { lg: "38px", xs: "28px" },
                  }}
                >
                  ${product.price}
                </Typography>
                <Typography variant="body1" paragraph>
                  {product.description}
                </Typography>
                <Stack direction="row" spacing={2}>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "black",
                    }}
                    onClick={() =>
                      handlleAddToCart({ productId: product.id, quantity: 1 })
                    }
                  >
                    Add to Cart
                  </Button>
                  <Link to="/cart" style={{ textDecoration: "none" }}>
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "black",
                      }}
                    >
                      Go to Cart
                    </Button>
                  </Link>
                </Stack>
              </Stack>
            </Stack>
          ) : (
            <NotFound />
          )}
        </>
      )}
    </Box>
  );
};

export default ProductDetail;
