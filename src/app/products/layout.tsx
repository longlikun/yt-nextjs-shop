import React from 'react'
import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'

const ProductsLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Header></Header>
            <main>{children}</main>
            <Footer></Footer>
        </>
    )
}

export default ProductsLayout