import React, { createContext, useContext } from "react";
import { Actions, Product } from "../../types";
import useProductState from "../useProductsState";
import { ProductList } from "./ProductList";

interface ContextType {
   products: Product[],
   productsDispatch: React.Dispatch<Actions>
}
const ProductsContext = createContext<ContextType | undefined>(undefined);
export const ProductsProvider: React.FC = ({ children }) => {
   const [{ products, initialized }, productsDispatch] = useProductState();
   return <ProductsContext.Provider value={{ products, productsDispatch }}>
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