import { createClient } from "../util/supabase/client"

export const fetchProducts = async () => {
    const supabase = createClient()
    const { data, error } = await supabase
        .from('products')
        .select('*')
        .limit(10)
    if (error) {
        throw new Error("获取商品数据发生错误")

    }
    return data



}

export const fetchProductSku = async (productId:string) => {

    const supabase = createClient()

          
    const { data, error } = await supabase
    .from('products')
    .select(`
        title,
        image,
        products_sku (
          *
        )
      `)
    .eq('id',productId)
    
    
    if (error) {
        throw new Error("获取商品详情数据发生错误")
    }
    return data

}



          