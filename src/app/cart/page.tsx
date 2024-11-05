"use client"
import React from 'react'
import Footer from '../components/Footer'


const CartPage = () => {
    // const { items, removeItem, updateQuantity,cleanCart } = useCartStore()

    return (
        <>
            <div className="min-h-screen flex flex-col bg-gray-100 pt-10">
                <div className="flex justify-between items-center px-6 xl:px-0 max-w-5xl mx-auto w-full">  
                    <h1 className="text-2xl font-bold">商品购物车</h1>
                    <button
                        onClick={() => {}}
                        className="px-4 py-2 text-sm text-red-500 hover:text-white border border-red-500 hover:bg-red-500 rounded transition-colors duration-200"
                    >
                        清空购物车
                    </button>
                </div>
                <div className="flex-grow bg-gray-100 pt-10 pb-10">

                    <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
                        <div className="rounded-lg md:w-2/3">
                           
                                <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start" >
                                    <img src='' alt="product-image" className="w-full rounded-lg sm:w-40" />
                                    <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                                        <div className="mt-5 sm:mt-0">
                                            <h2 className="text-lg font-bold text-gray-900">title</h2>
                                            <p className="mt-1 text-xs text-gray-700">尺码:size</p>
                                        </div>
                                        <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                                            <div className="flex items-center border-gray-100">
                                                <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 text-xl duration-100 hover:bg-blue-500 hover:text-blue-50" onClick={() => {}}> - </span>
                                                <span className="bg-gray-100 px-4 text-xl py-1">quantity</span>
                                                <span className="cursor-pointer rounded-r bg-gray-100 text-xl py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50" onClick={() => {}}> + </span>

                                            </div>

                                            <div className="flex items-center justify-between flex-col justify-end ">
                                                <p className="text-sm my-4">单价:$ price</p>
                                                <button
                                                    onClick={() => {}}
                                                    className="px-3 py-1 my-5 text-sm text-red-500 hover:text-white border border-red-500 hover:bg-red-500 rounded transition-colors duration-200"
                                                >
                                                    删除
                                                </button>
                                            </div>

                                        </div>

                                    </div>

                                </div>

                    


                        </div>

                        <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
                            <div className="mb-2 flex justify-between">
                                <p className="text-gray-700">Subtotal</p>
                                <p className="text-gray-700">$129.99</p>
                            </div>
                            <div className="flex justify-between">
                                <p className="text-gray-700">Shipping</p>
                                <p className="text-gray-700">$4.99</p>
                            </div>
                            <hr className="my-4" />
                            <div className="flex justify-between">
                                <p className="text-lg font-bold">Total</p>
                                <div className="">
                                    <p className="mb-1 text-lg font-bold">{} USD</p>
                                </div>
                            </div>
                            <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">去支付</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>

    )
}

export default CartPage