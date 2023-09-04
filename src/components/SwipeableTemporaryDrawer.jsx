import React, { useState } from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Product from "./Product";
import { Typography } from "@mui/material";

export default function SwipeableTemporaryDrawer({
  cartProducts,
  prodsInCart,
  removeFromCart,
  totalPrice,
}) {
  const [state, setState] = useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 400 }}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      // onKeyDown={toggleDrawer(anchor, false)}
    >
      {cartProducts.map((product, index) => {
        return (
          <>
            <Product
              key={index}
              name={product.name}
              image={product.imageUrl}
              price={product.price}
              isInCart={product.isInCart}
              removeFromCart={removeFromCart}
              id={product.id}
            />
            <Divider sx={{ m: 2 }} />
          </>
        );
      })}
    </Box>
  );

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
      }}
    >
      <Button
        startIcon={<ShoppingCartIcon />}
        onClick={toggleDrawer("left", true)}
        variant="contained"
        sx={{ textTransform: "none", m: 1 }}
        size="large"
      >
        <Typography>Amount: {prodsInCart}</Typography>
        <Typography sx={{ ml: 1 }}>Total Price: {totalPrice}</Typography>
      </Button>
      <SwipeableDrawer
        anchor="left"
        open={state["left"]}
        onClose={toggleDrawer("left", false)}
        onOpen={toggleDrawer("left", true)}
      >
        {list("left")}
      </SwipeableDrawer>
    </Box>
  );
}
