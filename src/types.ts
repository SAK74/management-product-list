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
interface ActionChangePage {
   type: 'pagination',
   payload?: Partial<Record<"page" | "per_page", number>>
}
export type Actions = ActionFetch | ActionChangePage;