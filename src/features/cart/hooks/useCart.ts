import { useCartStore } from "@/store/cartStore";

interface UseCartReturn {
    items: any[];
    clearCart: () => void;
    addToCart: (product: any) => void;
    totalPrice: number;
    totalItems: number;
    removeFromCart: (productId: string) => void;
    updateQuantity: (productId: string, quantity: number) => void;
}

export const useCart = (): UseCartReturn => {
    const items = useCartStore((state) => state.items);

    const addToCart = useCartStore((state) => state.addToCart);
    const clearCart = useCartStore((state) => state.clearCart);

    const removeFromCart = useCartStore((state) => state.removeFromCart);
    const updateQuantity = useCartStore((state) => state.updateQuantity);

    const getTotalPrice = useCartStore((state) => state.getTotalPrice);
    const getTotalItems = useCartStore((state) => state.getTotalItems);

    return {
        items,
        addToCart,
        clearCart,
        totalPrice: getTotalPrice(),
        totalItems: getTotalItems(),
        removeFromCart,
        updateQuantity,
    };
};
