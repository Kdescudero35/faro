import { useParams } from "react-router-dom";

import { useQuery } from "@tanstack/react-query";
import { useCartStore } from "../../../store/cartStore";
import type { Product } from "../types";

interface UseDetailReturn {
    error: Error | null;
    product: Product | null | undefined;
    loading: boolean;
    handleAddToCart: () => void;
}

const fetchProductById = async (id: string): Promise<Product> => {
    const response = await fetch(`/api/products/${id}`);
    if (!response.ok) {
        throw new Error('Error al obtener el producto');
    }
    return response.json() as Promise<Product>;
};

export const useDetail = (): UseDetailReturn => {
    const { id } = useParams<{ id: string }>();
    const addToCart = useCartStore((state) => state.addToCart);

    const { data, isLoading, error } = useQuery({
        queryKey: ['product', id],
        queryFn: async () => await fetchProductById(id!),
        enabled: !!id,
        staleTime: 1000 * 60 * 5,
    });

    const handleAddToCart = () => {
        if (data) {
            addToCart(data);
        }
    };

    return {
        error: error as Error | null,
        product: data,
        loading: isLoading,
        handleAddToCart,
    };
};
