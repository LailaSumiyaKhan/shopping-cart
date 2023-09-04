import Product from "./Product";
import { products } from "../data/products";
import { Box } from "@mui/material";
function ProductList() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        flexWrap: "wrap",
      }}
    >
      {products.map((product, index) => {
        return (
          <Product
            key={index}
            name={product.name}
            image={product.imageUrl}
            price={product.price}
          />
        );
      })}
    </Box>
  );
}

export default ProductList;
