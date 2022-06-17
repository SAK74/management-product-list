import { renderHook, waitFor } from "@testing-library/react";
import useProductState from "../products/useProductsState";
import { expectTypeOf } from 'expect-type';
import { Product } from "../types";

describe("Testing products State", () => {

   it("result should be Array with length 2", () => {
      const { result } = renderHook(() => useProductState());
      expect(result.current).toBeInstanceOf(Array);
      expect(result.current).toHaveLength(2);
   });

   it("products should be of type <Product>[] with length 12", async () => {
      const { result } = renderHook(() => useProductState());
      await waitFor(() => expect(result.current[0].initialized).toBeTruthy());
      const products = result.current[0].products;
      expectTypeOf(products).toEqualTypeOf<Product[]>();
      expect(products).toHaveLength(12);
   });
});