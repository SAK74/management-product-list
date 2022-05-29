import React, { useEffect, useReducer } from "react";
import getData from "../getData";
import { Actions, Product } from "../types";

interface ProductState {
   products: Product[],
   initialized: boolean
}
export default function useProductState(): [ProductState, React.Dispatch<Actions>] {
   const mainReducer = (state: ProductState, action: Actions): ProductState => {
      switch (action.type) {
         case "fetch":
            const products = Array.isArray(action.payload) ? action.payload : [action.payload];
            return { ...state, products, initialized: true }

         default: return state
      }
   }
   const [state, dispatch] = useReducer(mainReducer, {
      products: [],
      initialized: false
   });
   useEffect(() => {
      getData<Product[]>({ per_page: 5 })
         .then(data => dispatch({ type: 'fetch', payload: data }))
   }, []);
   return [state, dispatch];
}