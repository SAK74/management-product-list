import { Button, Popover, Stack, Typography } from "@mui/material";
import { MouseEvent, useMemo, useState } from "react";
import getData from "../../getData";
import { Product } from '../../types';
import { useProductContext } from './';

export function SidePanel() {
   const { productsDispatch: dispatch, page, per_page, products } = useProductContext();
   //create url string to sharing
   const url = useMemo(() => {
      if (products.length === 1) {
         return `https://reqres.in/api/products?id=${products[0].id}`
      }
      return `https://reqres.in/api/products?page=${page}&per_page=${per_page}`;
   }, [page, per_page, products.length]);

   const handleReload = () => {
      getData<Product[]>({ per_page: 12 })
         .then(data => dispatch({ type: 'fetch', payload: data }));
   }

   const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
   const handleShare = ({ currentTarget }: MouseEvent<HTMLElement>) => {
      setAnchorEl(currentTarget);
   }

   return (
      <Stack direction="row" sx={{ alignSelf: "start" }} gap={2}>
         <Button
            children="reload all"
            onClick={handleReload}
         />
         <Button
            children="share URL"
            onClick={handleShare}
         />
         <Popover
            open={!!anchorEl}
            anchorEl={anchorEl}
            onClose={() => setAnchorEl(null)}
            anchorOrigin={{
               vertical: 'bottom',
               horizontal: 'center'
            }}
         >
            <Typography
               sx={{ px: 2, py: .5 }}
               children={url}
            />
         </Popover>
      </Stack>
   )
}