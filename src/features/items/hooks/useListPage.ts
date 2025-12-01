import { useState, useRef } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useQuery, keepPreviousData } from "@tanstack/react-query";

import type { Product, SearchResult } from "../types";
import { validateSearchInput, validateOffset, validateLimit } from "@/lib/validation";
import { useDebounce } from "@/shared/hooks/useDebounce";

interface UseListPageReturn {
    sort: 'price_asc' | 'price_desc' | null;
    limit: number;
    total: number;
    error: unknown;
    offset: number;
    loading: boolean;
    products: Product[];
    condition: 'new' | 'used' | null;
    nextPage: () => void;
    prevPage: () => void;
    searchRef: React.RefObject<HTMLInputElement | null>;
    toggleSort: () => void;
    handleSearch: () => void;
    toggleCondition: (condition: 'new' | 'used') => void;
    navigateToDetail: (id: string) => void;
}

const LIMIT = 4;

export const useListPage = (): UseListPageReturn => {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();

    const [sort, setSort] = useState<'price_asc' | 'price_desc' | null>(null);
    const [offset, setOffset] = useState<number>(0);
    const [condition, setCondition] = useState<'new' | 'used' | null>(null);

    const searchRef = useRef<HTMLInputElement | null>(null);
    const searchQuery = validateSearchInput(searchParams.get("q") ?? "");
    
    // Debounce la query de búsqueda para evitar demasiadas requests
    const debouncedSearchQuery = useDebounce(searchQuery, 300);

    const navigateToDetail = (id: string) => {
        navigate(`/items/${id}`);
    }

    const { data, isLoading, error } = useQuery({
        queryKey: ['products', debouncedSearchQuery, validateOffset(offset), sort, condition],
        queryFn: async () => {
            const params = new URLSearchParams();
            
            if (debouncedSearchQuery) params.append('q', debouncedSearchQuery);
            params.append('limit', validateLimit(LIMIT).toString());
            params.append('offset', validateOffset(offset).toString());
            if (sort) params.append('sort', sort);
            if (condition) params.append('condition', condition);

            const response = await fetch(`/api/products?${params.toString()}`);
            if (!response.ok) throw new Error('Error al obtener productos');
            
            const data: SearchResult = await response.json();
            return data;
        },
        staleTime: 1000 * 60 * 5,
        placeholderData: keepPreviousData,
        retry: 1,
    });

    const handleSearch = () => {
        const value = validateSearchInput(searchRef.current?.value ?? "");
        setSearchParams(value ? { q: value } : {});
        setOffset(0);
    };

    const toggleSort = () => {
        setSort(prev => {
            if (prev === null) return 'price_asc';
            if (prev === 'price_asc') return 'price_desc';
            return null;
        });
        setOffset(0);
    };

    const toggleCondition = (newCondition: 'new' | 'used') => {
        setCondition(prev => (prev === newCondition ? null : newCondition));
        setOffset(0);
    };

    const nextPage = () => setOffset((prev: number) => validateOffset(prev + LIMIT));
    const prevPage = () => setOffset((prev: number) => validateOffset(Math.max(0, prev - LIMIT)));

    return {
        sort,
        error,
        limit: LIMIT,
        total: data?.paging.total ?? 0,
        offset,
        loading: isLoading,
        nextPage,
        products: data?.results ?? [] as Product[],
        prevPage,
        searchRef,
        condition,
        toggleSort,
        handleSearch,
        toggleCondition,
        navigateToDetail,
    };
};
