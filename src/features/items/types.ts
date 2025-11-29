export interface Installments {
    amount: number;
    quantity: number;
}

export interface Shipping {
    free_shipping: boolean;
}

export interface Reviews {
    total: number;
    rating_average: number;
}

type ConditionType = 'new' | 'used';

export interface Product {
    id: string;
    title: string;
    price: number;
    reviews?: Reviews;
    thumbnail: string;
    shipping?: Shipping;
    condition: ConditionType;
    currency_id: string;
    installments?: Installments;
}

export interface Paging {
    total: number;
    limit: number;
    offset: number;
}

export interface SearchResult {
    query: string;
    paging: Paging;
    results: Product[];
}
