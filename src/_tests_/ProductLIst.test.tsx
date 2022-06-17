import { screen } from '@testing-library/react';
import { ProductList } from '../products/components';
import '@testing-library/jest-dom';
import { wrappedRender } from './wrappedRender';

describe("Testing ProductList Component", () => {
   beforeEach(() => wrappedRender(<ProductList />));

   it("should be render without State", () => {
      expect(screen.getByText("...loading")).toBeInTheDocument();
   });

   it("should be render table", async () => {
      const table = await screen.findByRole("table");
      expect(table).toBeInTheDocument();
      const rows = table.querySelector('tbody')?.children;
      expect(rows).toHaveLength(5);
   });
});