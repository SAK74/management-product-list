import getData from '../getData';
import { Product } from '../types';

describe("test API", () => {
   it("should be Arrray", () => {
      getData<Product[]>()
         .then(data => expect(data).toBeInstanceOf(Array));
   });
   it("should be Object", () => {
      getData<Product>({ id: parseInt((Math.random() * 11).toString()) })
         .then(data => expect(data).toBeInstanceOf(Object));
   });
   it('should be specific length', () => {
      const specLength = Math.round(Math.random() * 11);
      getData<Product[]>({ per_page: specLength })
         .then(data => expect(data).toHaveLength(specLength));
   });
});