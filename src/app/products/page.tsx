import React from 'react'
import Header from '@/app/components/Header'
import ProductList from '@/app/components/ProductList'
import Footer from '../components/Footer'

const ProductListPage = () => {
    return (
        <div>
            <Header></Header>
            <ProductList></ProductList>
            <Footer></Footer>
        </div>
    )
}

export default ProductListPage