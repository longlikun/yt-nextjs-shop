export interface IProduct {

    id: string
    category_id: string
    title: string
    image: string
    description: string
    price: number,
    slug:string,
    created_at: Date
    updated_at: Date

}
export interface IProductSku {
    id: string
    category_id: string
    title: string
    image: string
    description: string
    price: number,
    slug:string,
    size:string,
    stock:number,
    created_at: Date
    updated_at: Date

}
export interface ICategory {
    id: string
    name: string
}

