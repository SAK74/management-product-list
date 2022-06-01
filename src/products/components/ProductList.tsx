import {
   Table, TableBody, TableCell, TableContainer, TableHead,
   TableRow, Paper, TableFooter, TablePagination
} from "@mui/material";
import { ChangeEvent, MouseEvent } from "react";
import { useProductContext } from "./ProductsProvider";
import { SimpleProduct, SidePanel } from './';

export function ProductList() {
   const { products, page: statePage, per_page, productsDispatch: dispatch } = useProductContext();
   const page = statePage - 1;
   const rowsOfItems = (per_page > 0 ?
      products.slice(page * per_page, page * per_page + per_page)
      : products)
      .map(product =>
         <TableRow key={product.id} sx={{ background: product.color }}>
            <SimpleProduct product={product} />
         </TableRow>);

   const handlePageChange = (ev: MouseEvent | null, page: number) => {
      dispatch({ type: 'pagination', payload: { page: page + 1 } });
   }
   const handlePerPage = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
      dispatch({ type: 'pagination', payload: { per_page: Number(value), page: 1 } });
   }
   return (
      <TableContainer component={Paper} sx={{ width: 3 / 5 }}>
         <SidePanel />
         <Table size="small">
            <TableHead>
               <TableRow>
                  <TableCell children="ID" />
                  <TableCell children="Name" />
                  <TableCell children="Year" />
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
                  onPageChange={handlePageChange}
                  page={page}
                  rowsPerPage={per_page}
                  rowsPerPageOptions={[5, 10, { label: "All", value: -1 }]}
                  onRowsPerPageChange={handlePerPage}
               />
            </TableRow>
         </TableFooter>
      </TableContainer>
   );
}
