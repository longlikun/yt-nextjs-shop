import React from 'react'
import ProductList from '@/app/components/ProductList'
import { createClient } from '../util/supabase/server'

const ProductListPage = async () => {
    const supabase = createClient()

    const { data: products } = await supabase
        .from('products')
        .select('*')
        .limit(10)

    console.log('products', products)

    return (
        <div>
            {products && (
                <ProductList productList={products}></ProductList>

            )}


        </div>
    )
}

export default ProductListPage