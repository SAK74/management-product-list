import { styled, TableCell as MuiTableCell } from '@mui/material';
import React from 'react';
import { Product } from '../../types';

const TableCell = styled(MuiTableCell)({
   color: "white"
});
export const SimpleProduct: React.FC<{ product: Product }> = ({ product }) => {
   return (
      <>
         <TableCell children={product.id} />
         <TableCell children={product.name} />
         <TableCell children={product.year} />
      </>
   )
}