"use client"
import React from 'react'
import ProductList from '@/app/components/ProductList'
import { useQuery } from '@tanstack/react-query'
import { fetchProducts } from '../lib/products'

const ProductListPage =  () => {
  

    const {data:products} = useQuery({ queryKey: ['products'], queryFn: fetchProducts })

    return (
        <div>
            {products && (
                <ProductList productList={products}></ProductList>

            )}


        </div>
    )
}

export default ProductListPage