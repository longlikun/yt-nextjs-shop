"use client"
import React from 'react'
import useCartStore from '../store/cartStore'

const HeaderCart = () => {
    const totalQuantity = useCartStore((state) => state.totalQuantity)
    return (

        <div className="hidden relative md:block">
            <button
                type="button"
                className="overflow-hidden"
            >
                <span className="sr-only">Toggle dashboard menu</span>

                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-bag h-6 w-6 shrink-0" aria-hidden="true"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path><path d="M3 6h18"></path><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
           
                    <span className="absolute -bottom-0 -left-0.5 rounded-full bg-neutral-900 p-0.25 px-1 text-xs  text-red-50">{totalQuantity}</span>

           
            </button>

        </div>
    )
}

export default HeaderCart