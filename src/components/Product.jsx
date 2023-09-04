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

const Product = ({ name, price, image }) => {
  return (
    <Card sx={{ minWidth: 380, m: 1 }}>
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
          sx={{ textTransform: "none" }}
          startIcon={<AddShoppingCartIcon />}
        >
          Add To Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default Product;
