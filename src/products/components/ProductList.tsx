import {
   Table, TableBody, TableCell, TableContainer, TableHead,
   TableRow, Paper, TableFooter, TablePagination
} from "@mui/material";
import { useProductContext } from "./ProductsProvider";
import { SimpleProduct } from "./SimpleProduct";

export function ProductList() {
   const { products } = useProductContext();
   console.log(products);
   const rowsOfItems = products.map(product => <TableRow key={product.id} >
      <SimpleProduct product={product} />
   </TableRow>);
   return (
      <TableContainer component={Paper} sx={{ width: 4 / 5 }}>
         <Table >
            <TableHead>
               <TableRow>
                  <TableCell children="id" />
                  <TableCell children="name" />
                  <TableCell children="year" />
               </TableRow>
            </TableHead>
            <TableBody>
               {rowsOfItems}
            </TableBody>
         </Table>
         <TableFooter>
            <TableRow>
               <TablePagination
                  count={products.length}
                  onPageChange={() => { }}
                  page={0}
                  rowsPerPage={5}
                  rowsPerPageOptions={[5, 10]}
               />
            </TableRow>
         </TableFooter>
      </TableContainer>
   );
}
