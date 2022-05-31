import { Box } from "@mui/material";
import { ProductList, ProductsProvider, InputField } from './products/components';
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
