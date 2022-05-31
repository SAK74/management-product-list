import React, { createContext, useContext } from "react";
import { Actions, Product } from "../../types";
import useProductState from "../useProductsState";

interface ContextType {
   products: Product[],
   page: number,
   per_page: number,
   productsDispatch: React.Dispatch<Actions>
}
const ProductsContext = createContext<ContextType | undefined>(undefined);
export const ProductsProvider: React.FC = ({ children }) => {
   const [{ initialized, ...other }, productsDispatch] = useProductState();
   return <ProductsContext.Provider value={{ productsDispatch, ...other }}>
      {!initialized ? <div>...loading</div>
         :
         children
      }
   </ProductsContext.Provider>
}

export const useProductContext = () => {
   const context = useContext(ProductsContext);
   if (!context) {
      throw new Error("component is beyong context");
   }
   return context;
}