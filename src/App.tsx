import { Box } from "@mui/material";
import { InputField } from "./products/components/InputField";
import { ProductList } from "./products/components/ProductList";
import { ProductsProvider } from "./products/components/ProductsProvider";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <ProductsProvider>
        <Box sx={{ display: "flex", flexDirection: 'column', alignItems: "center", gap: 2 }}>
          <InputField />
          <ProductList />
        </Box>
      </ProductsProvider>
    </div>
  );
}
