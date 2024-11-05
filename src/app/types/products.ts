export interface IProduct {

    id: string
    category_id: string
    title: string
    image: string
    description: string
    price: number,
    slug: string,
    created_at: Date
    updated_at: Date

}

export interface IProductSku {
    size: string,
    stock: number,
    id: string
    title: string
    image: string
    description: string
    price: number,
    created_at: Date
    updated_at: Date
}

export interface ICategory {
    id: string
    name: string
}
export interface IProductDetail {
    id: string,
    title: string,
    image:string,
    default_sku: IProductSku,
    product_sku: IProductSku[]
}
// 购物车类型
export type ICartItem = IProductSku & {
    quantity: number
  }
  