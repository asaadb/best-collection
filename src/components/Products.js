import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import ProductCard from "./ProductCard";
import { useState, useEffect, useContext } from "react";
import { ProductsContext } from "../contexts/Contexts";
import Loader from "./Loader";

const Products = () => {
  const { products, categories } = useContext(ProductsContext);
  const [filteredItems, setFilteredItems] = useState([...products]);

  useEffect(() => {
    setFilteredItems(products);
  }, [products]);

  return (
    <Box id="products" mt="50px">
      <Typography
        variant="h3"
        textAlign="center"
        pb="15px"
        borderBottom="1px solid black"
        width="85%"
        ml="auto"
        mr="auto"
      >
        Products
      </Typography>
      {categories.length && products.length ? (
        <>
          <Stack
            direction="row"
            justifyContent="center"
            alignContent="center"
            alignItems="center"
            sx={{ flexWrap: "wrap" }}
            mt="40px"
            gap={1.5}
          >
            <Button
              variant="outlined"
              sx={{
                color: "black",
                borderColor: "black",
                fontSize: { lg: "17px", xs: "13px" },
              }}
              onClick={() => setFilteredItems([...products])}
            >
              All
            </Button>
            {categories.map((category) => (
              <Button
                key={category}
                variant="outlined"
                sx={{
                  color: "black",
                  borderColor: "black",
                  fontSize: { lg: "17px", xs: "13px" },
                }}
                onClick={() =>
                  setFilteredItems(
                    products.filter((item) => item.category === category)
                  )
                }
              >
                {category}
              </Button>
            ))}
          </Stack>
          <Stack
            direction="row"
            sx={{
              gap: "30px",
            }}
            flexWrap="wrap"
            justifyContent="center"
            mt="35px"
          >
            {filteredItems.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </Stack>
        </>
      ) : (
        <Loader />
      )}
    </Box>
  );
};

export default Products;
