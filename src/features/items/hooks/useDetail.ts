import { useState } from "react";
import { useParams } from "react-router-dom";

import { useQuery } from "@tanstack/react-query";
import type { Product } from "../types";

import { useCartStore } from "../../../store/cartStore";

interface UseDetailReturn {
    error: Error | null;
    product: Product | null | undefined;
    loading: boolean;
    quantity: number;
    handleAddToCart: () => void;
    handleIncrement: () => void;
    handleDecrement: () => void;
}

export const useDetail = (): UseDetailReturn => {
    const { id } = useParams<{ id: string }>();
    const addToCart = useCartStore((state) => state.addToCart);

    const [quantity, setQuantity] = useState(1);

    const handleIncrement = () => setQuantity((q) => q + 1);
    const handleDecrement = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

    const { data, isLoading, error } = useQuery({
        queryKey: ['product', id],
        queryFn: async () => {
            if (!id) return null;
            const response = await fetch(`/api/products/${id}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json() as Promise<Product>;
        },
        enabled: !!id,
    });

    const handleAddToCart = () => {
        if (data) {
            addToCart(data, quantity);
        }
    }

    return {
        error,
        product: data,
        loading: isLoading,
        quantity,
        handleAddToCart,
        handleIncrement,
        handleDecrement,
    };
};
