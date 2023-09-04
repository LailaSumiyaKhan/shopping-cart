import Product from "./Product";
import { Box } from "@mui/material";
function ProductList({ addToCart, listProducts, uniqueId }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        flexWrap: "wrap",
      }}
    >
      {listProducts.map((product, index) => {
        return (
          <Product
            key={index}
            name={product.name}
            image={product.imageUrl}
            price={product.price}
            isInCart={product.isInCart}
            addToCart={addToCart}
            uniqueId={uniqueId}
          />
        );
      })}
    </Box>
  );
}

export default ProductList;
