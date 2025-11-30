import { useState, useRef } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useQuery, keepPreviousData } from "@tanstack/react-query";

import type { Product, SearchResult } from "../types";

interface UseListPageReturn {
    limit: number;
    offset: number;
    loading: boolean;
    products: Product[];
    nextPage: () => void;
    prevPage: () => void;
    searchRef: React.RefObject<HTMLInputElement | null>;
    handleSearch: () => void;
    navigateToDetail: (id: string) => void;
    sort: 'price_asc' | 'price_desc' | null;
    condition: 'new' | 'used' | null;
    toggleSort: () => void;
    toggleCondition: (condition: 'new' | 'used') => void;
    total: number;
}

const LIMIT = 4;

export const useListPage = (): UseListPageReturn => {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();

    const [sort, setSort] = useState<'price_asc' | 'price_desc' | null>(null);
    const [offset, setOffset] = useState(0);
    const [condition, setCondition] = useState<'new' | 'used' | null>(null);

    const searchRef = useRef<HTMLInputElement | null>(null);
    const searchQuery = searchParams.get("q") ?? "";

    const navigateToDetail = (id: string) => {
        navigate(`/detail/${id}`);
    }

    const { data, isLoading } = useQuery({
        queryKey: ['products', searchQuery, offset, sort, condition],
        queryFn: async () => {
            const params = new URLSearchParams({
                q: searchQuery,
                limit: LIMIT.toString(),
                offset: offset.toString(),
            });

            if (sort) params.append('sort', sort);
            if (condition) params.append('condition', condition);

            const response = await fetch(`/api/products?${params.toString()}`);
            const data: SearchResult = await response.json();
            return data;
        },
        staleTime: 1000 * 60 * 5,
        placeholderData: keepPreviousData,
    });

    const handleSearch = () => {
        const value = searchRef.current?.value ?? "";
        setSearchParams({ q: value });
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

    const nextPage = () => setOffset((prev: number) => prev + LIMIT);
    const prevPage = () => setOffset((prev: number) => Math.max(0, prev - LIMIT));

    return {
        limit: LIMIT,
        offset,
        loading: isLoading,
        searchRef,
        products: data?.results ?? [] as Product[],
        nextPage,
        prevPage,
        handleSearch,
        navigateToDetail,
        sort,
        condition,
        toggleSort,
        toggleCondition,
        total: data?.paging.total ?? 0,
    };
};
