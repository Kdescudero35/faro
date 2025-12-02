import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Product } from "../features/items/types";
import type { CartItem, CartState } from "../features/cart/types";

export const useCartStore = create<CartState>()(
    persist(
        (set, get) => ({
            items: [],
            
            addToCart: (product: Product) =>
                set((state) => {
                    const existingItem = state.items.find((item) => item.id === product.id);
                    if (existingItem) {
                        return {
                            items: state.items.map((item) =>
                                item.id === product.id
                                    ? { ...item, quantity: (item.quantity || 1) + 1 }
                                    : item
                            ),
                        };
                    }
                    return { items: [...state.items, { ...product, quantity: 1 } as CartItem] };
                }),
            
            removeFromCart: (productId: string) =>
                set((state) => ({
                    items: state.items.filter((item) => item.id !== productId),
                })),
            
            updateQuantity: (productId: string, quantity: number) =>
                set((state) => ({
                    items: state.items.map((item) =>
                        item.id === productId
                            ? { ...item, quantity: Math.max(1, quantity) }
                            : item
                    ),
                })),
            
            clearCart: () => set({ items: [] }),
            
            getTotalPrice: () => {
                const { items } = get();
                return items.reduce((total, item) => total + (item.price * (item.quantity || 1)), 0);
            },
            
            getTotalItems: () => {
                const { items } = get();
                return items.reduce((total, item) => total + (item.quantity || 1), 0);
            },
        }),
        {
            name: "cart-storage",
        }
    )
);