import getData from '../../getData';
import { Product } from '../../types';

describe("test API", () => {
   it("should be Arrray", () => {
      getData<Product[]>()
         .then(data => expect(data).toBeInstanceOf(Array));
   });
   it("should be Object", () => {
      getData<Product>({ id: parseInt((Math.random() * 12).toString()) })
         .then(data => expect(data).toBeInstanceOf(Object));
   });
});