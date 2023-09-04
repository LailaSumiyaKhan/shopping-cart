import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActions,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

const Product = ({
  name,
  price,
  image,
  isInCart,
  addToCart,
  removeFromCart,
  id,
  uniqueId,
}) => {
  function handleAddToCart() {
    const product = {
      name,
      price,
      imageUrl: image,
      isInCart: true,
      id: uniqueId + 1,
    };
    addToCart(product);
  }

  function handleRemoveFromCart() {
    const product = {
      name,
      price,
      imageUrl: image,
      isInCart: false,
      id,
    };
    removeFromCart(product);
  }

  return (
    <Card sx={{ minWidth: 370, m: 1 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Price: {price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          sx={{
            textTransform: "none",
            display: isInCart ? "block" : "none",
            borderRadius: 6,
          }}
          onClick={handleRemoveFromCart}
        >
          <RemoveCircleOutlineIcon sx={{ pt: 0.5 }} />
        </Button>

        <Button
          variant="contained"
          sx={{
            textTransform: "none",
            display: isInCart ? "none" : "block",
            borderRadius: 6,
          }}
          onClick={handleAddToCart}
        >
          <AddShoppingCartIcon sx={{ pt: 0.5 }} />
        </Button>
      </CardActions>
    </Card>
  );
};

export default Product;
