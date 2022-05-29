import { TableCell } from '@mui/material';
import React from 'react';
import { Product } from '../../types';

export const SimpleProduct: React.FC<{ product: Product }> = ({ product }) => {
   // console.log(product);
   return (
      <>
         <TableCell children={product.id} />
         <TableCell children={product.name} />
         <TableCell children={product.year} />
      </>
   )
}