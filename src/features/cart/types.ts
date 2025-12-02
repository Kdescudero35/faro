import type { Product } from "../items/types";

export interface CartItem extends Product {
    quantity: number;
}

export interface CartState {
    items: CartItem[];
    addToCart: (product: Product) => void;
    clearCart: () => void;
    getTotalPrice: () => number;
    getTotalItems: () => number;
    removeFromCart: (productId: string) => void;
    updateQuantity: (productId: string, quantity: number) => void;
}
