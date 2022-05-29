export interface Product {
   id: number,
   name: string,
   year: number,
   color: string,
   pantone_value: string
}

interface ActionFetch {
   type: "fetch",
   payload: Product[] | Product
}
export type Actions = ActionFetch;