import { useState } from "react";
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { useNavigate, useSearchParams } from "react-router-dom";

import { useDebounce } from "@/shared/hooks/useDebounce";
import type { Product, SearchResult } from "../types";
import { validateSearchInput, validateOffset, validateLimit } from "@/lib/validation";

interface UseListPageReturn {
    limit: number;
    total: number;
    error: unknown;
    offset: number;
    loading: boolean;
    products: Product[];
    nextPage: () => void;
    prevPage: () => void;
    toggleSort: () => void;
    navigateToDetail: (id: string) => void;
}

const LIMIT = 3;

export const useListPage = (): UseListPageReturn => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    const [sort, setSort] = useState<'price_asc' | 'price_desc' | null>(null);
    const [offset, setOffset] = useState<number>(0);

    const searchQuery = validateSearchInput(searchParams.get("q") ?? "");
    const debouncedSearchQuery = useDebounce(searchQuery, 300);

    const navigateToDetail = (id: string) => {
        navigate(`/items/${id}`);
    };

    const fetchProducts = async (): Promise<SearchResult> => {
        const params = new URLSearchParams();

        if (debouncedSearchQuery) params.append('q', debouncedSearchQuery);
        params.append('limit', validateLimit(LIMIT).toString());
        params.append('offset', validateOffset(offset).toString());
        if (sort) params.append('sort', sort);

        const response = await fetch(`/api/products?${params.toString()}`);
        if (!response.ok) throw new Error('Error al obtener productos');

        return response.json() as Promise<SearchResult>;
    };

    const { data, isLoading, error } = useQuery({
        queryKey: ['products', debouncedSearchQuery, validateOffset(offset), sort],
        queryFn: async () => await fetchProducts(),
        retry: 1,
        staleTime: 1000 * 60 * 5,
        placeholderData: keepPreviousData,
    });

    const toggleSort = () => {
        setSort(prev => {
            if (prev === null) return 'price_asc';
            if (prev === 'price_asc') return 'price_desc';
            return null;
        });
        setOffset(0);
    };

    const nextPage = () => setOffset((prev: number) => validateOffset(prev + LIMIT));
    const prevPage = () => setOffset((prev: number) => validateOffset(Math.max(0, prev - LIMIT)));

    return {
        limit: LIMIT,
        total: data?.paging.total ?? 0,
        error,
        offset,
        loading: isLoading,
        nextPage,
        prevPage,
        products: data?.results ?? [] as Product[],
        toggleSort,
        navigateToDetail,
    };
};
