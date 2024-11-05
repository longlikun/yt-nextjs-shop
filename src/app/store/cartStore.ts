import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { ICartItem } from '../types/products'


export interface ICartState {
  items: ICartItem[]
  totalQuantity: number
  removeItem: (itemId: string) => void
  addItem: (itemId: ICartItem) => void
  cleanCart: () => void
  updateQuantity: (itemId: string, quantity: number) => void
}

const useCartStore = create<ICartState>()(
  devtools(
    persist(
      (set) => ({
        items: [],
        totalQuantity: 0,

        removeItem: (itemId) => set((state) => {
          const filterItems = state.items.filter((i) => i.id != itemId)
          return {
            items: filterItems,
            totalQuantity: filterItems.reduce((acc, item) => acc + item.quantity, 0)

          };

        }),
        cleanCart: () => set({ items: [], totalQuantity: 0 }),
        addItem: (item: ICartItem) => set((state) => {
          const existingItem = state.items.find((i) => i.id === item.id);
          if (existingItem) {
            const updateItems = state.items.map((i) =>
              i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
            )
            return {
              items: updateItems,
              totalQuantity: updateItems.reduce((acc, item) => acc + item.quantity, 0)
            }
          }
          const newItem = [...state.items, { ...item, quantity: 1 }]
          return {
            items: newItem,
            totalQuantity: newItem.reduce((acc, item) => acc + item.quantity, 0)
          }

        }),
        updateQuantity: (itemId: string, quantity: number) => set((state) => {

          const updateItems = state.items
            .map((item) =>
              item.id === itemId ? { ...item, quantity: Math.max(0, quantity) } : item)
            .filter((item) => item.quantity > 0)

          return {
            items: updateItems,
            totalQuantity: updateItems.reduce((acc, item) => acc + item.quantity, 0)
          }

        })


      }),


      {
        name: 'cart-storage',
      },
    ),
  ),
)

export default useCartStore