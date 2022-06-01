import { Box, IconButton, TextField } from "@mui/material";
import { ChangeEvent, useState } from "react";
import getData from "../../getData";
import { Product } from "../../types";
import { useProductContext } from "./ProductsProvider";
import SearchIcon from '@mui/icons-material/ContentPasteSearch';

export function InputField() {
   const { products } = useProductContext();
   //memorization initial length of array
   const [length] = useState(products.length);
   const [input, setInput] = useState(0);
   const { productsDispatch: dispatch } = useProductContext();

   const handleChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
      if (Number(value) >= 0) {
         setInput(parseInt(value) | 0);
      }
   }
   const handleSearch = () => {
      getData<Product>({ id: input })
         .then(data => dispatch({ type: 'fetch', payload: data }));
   }
   return <Box>
      <TextField
         size="small"
         label="Input ID"
         value={input || ""}
         onChange={handleChange}
         error={input > length}
         helperText={input > length && "Too high... "}
      />
      <IconButton
         children={<SearchIcon />}
         disabled={!input || input > length}
         onClick={handleSearch}
      />
   </Box>
}