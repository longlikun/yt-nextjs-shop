import { ICartItem } from '@/app/types/products'
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface CartState {
    items: ICartItem[],
    totalQuantity: number
    totalAmount: number
    addCart: (item: ICartItem) => void
    removeItem: (itemId: string) => void
    updateItem: (itemId: string, delta: number) => void
    caleanItem: () => void

}

const useCartStore = create<CartState>()(
    devtools(
        persist(
            (set) => ({
                items: [],
                totalQuantity: 0,
                totalAmount: 0,
                addCart: (item: ICartItem) => set((state) => {
                    const existingItem = state.items.find((i) => i.id === item.id);

                    if (existingItem) {
                        const updateItems = state.items.map((i) => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i)
                        return {
                            items: updateItems,
                            totalQuantity: updateItems.reduce((acc, item) => acc + item.quantity, 0),
                            totalAmount: updateItems.reduce((acc, item) => acc + item.quantity * item.price, 0),
                        }
                    }
                    const newItem = [...state.items, { ...item, quantity: 1 }]
                    return {
                        items: newItem,
                        totalQuantity: newItem.reduce((acc, item) => acc + item.quantity, 0),
                        totalAmount: newItem.reduce((acc, item) => acc + item.quantity * item.price, 0),
                    }

                }),
                removeItem: (itemId: string) => set((state) => {
                    if (confirm("确实要删除商品吗")) {
                        const filterItem = state.items.filter((item) => item.id != itemId)
                        return {
                            items: filterItem,
                            totalQuantity: filterItem.reduce((acc, item) => acc + item.quantity, 0),
                            totalAmount: filterItem.reduce((acc, item) => acc + item.quantity * item.price, 0),
                        }

                    }

                    return state


                }),
                updateItem: (itemId: string, delta: number) => set((state) => {
                    const item = state.items.find(i => i.id === itemId)
                    if (item?.quantity ===1 && delta < 1) {
                        if (confirm("商品数量即将清零,是否确认删除")) {
                            const filterItem = state.items.filter((item) => item.id != itemId)
                            return {
                                items: filterItem,
                                totalQuantity: filterItem.reduce((acc, item) => acc + item.quantity, 0),
                                totalAmount: filterItem.reduce((acc, item) => acc + item.quantity * item.price, 0),
                            }
                        

                        }
                        return state

                    }


                    const updateItem = state.items.map((item) => item.id === itemId ? { ...item, quantity: Math.max(0, delta) } : item).filter((item) => item.quantity > 0)
                    return {
                        items: updateItem,
                        totalQuantity: updateItem.reduce((acc, item) => acc + item.quantity, 0),
                        totalAmount: updateItem.reduce((acc, item) => acc + item.quantity * item.price, 0),
                    }
                }),
                caleanItem: () => set((state) => {
                    if (confirm("是否需要清空购物车")) {
                        return {
                            items: [],
                            totalQuantity: 0,
                            totalAmount: 0,

                        }

                    }
                    return state

                })

            }),
            {
                name: 'cart-storage',
            },
        ),
    ),
)
export default useCartStore