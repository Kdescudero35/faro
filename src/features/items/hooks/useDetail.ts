import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import type { Product } from "../types";

export const useDetail = () => {
    const { id } = useParams<{ id: string }>();

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

    console.log(data);

    return {
        product: data,
        loading: isLoading,
        error,
    };
};
