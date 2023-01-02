import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <Card sx={{ width: 345, height: 400, textOverflow: "ellipsis" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={product.image}
          alt={product.title}
          sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
        />
        <CardContent component="div" sx={{ textOverflow: "ellipsis" }}>
          <Typography
            textAlign="center"
            gutterBottom
            variant="h5"
            component="div"
            noWrap
            textOverflow="ellipsis"
          >
            {product.title}
          </Typography>
          <Typography variant="h6" textAlign="center" fontWeight={700}>
            ${product.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ justifyContent: "center" }}>
        <Link to={`/products/${product.id}`} style={{ textDecoration: "none" }}>
          <Button variant="contained" sx={{ backgroundColor: "black" }}>
            Buy now
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
