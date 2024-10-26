"use client"
import React from 'react'
import useCartStore from '../store/cartStore'
import Footer from '../components/Footer'


const CartPage = () => {
    const { items, addItem, removeItem, updateQuantity } = useCartStore()
    console.log('items',items)

    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

    return (
        <>

        <div className="h-screen bg-gray-100 pt-20">
            <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
            <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
                <div className="rounded-lg md:w-2/3">
                    {items.map((item) => (
                        <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start" key={item.id}>
                            <img src={item.image} alt="product-image" className="w-full rounded-lg sm:w-40" />
                            <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                                <div className="mt-5 sm:mt-0">
                                    <h2 className="text-lg font-bold text-gray-900">{item.title}</h2>
                                    <p className="mt-1 text-xs text-gray-700">{item.size}</p>
                                </div>
                                <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                                    <div className="flex items-center border-gray-100">
                                        <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50" onClick={() => updateQuantity(item.id, item.quantity - 1)}> - </span>
                                        <span className="bg-gray-100 px-4 py-1">{item.quantity}</span>
                                        <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50" onClick={() => addItem(item)}> + </span>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <p className="text-sm">{item.price}</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500" onClick={() => removeItem(item.id.toString())}>
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                    ))}


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
                            <p className="mb-1 text-lg font-bold">{total} USD</p>
                        </div>
                    </div>
                    <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">Check out</button>
                </div>
            </div>
        </div>
        <Footer></Footer>
        </>

    )
}

export default CartPage