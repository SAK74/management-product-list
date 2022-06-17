import { FC, ReactElement } from 'react';
import { ProductsProvider } from '../products/components';
import { render, RenderOptions } from '@testing-library/react';

const contextProvider: FC = ({ children }) => (
   <ProductsProvider>
      {children}
   </ProductsProvider>
);
export const wrappedRender = (ui: ReactElement, options?: Omit<RenderOptions, "wrapper">) =>
   render(ui, { ...options, wrapper: contextProvider });