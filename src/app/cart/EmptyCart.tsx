import React from 'react'
import Footer from '../components/Footer'
import { useRouter } from 'next/navigation';

const EmptyCart = () => {
    const router = useRouter();

    return (
        <div className="h-screen bg-gray-100 pt-20">
            <div className="text-center">
                <h1 className="mb-4 text-2xl font-bold">购物车是空的</h1>
                <button
                    onClick={() => router.push('/products')}
                    className="rounded-md bg-blue-500 px-4 py-2 font-medium text-blue-50 hover:bg-blue-600"
                >
                    去购物
                </button>
            </div>
            <Footer />
        </div>
    );
};

export default EmptyCart