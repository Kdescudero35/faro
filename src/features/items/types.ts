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

export interface Picture {
    id: string;
    url: string;
}

export interface Attribute {
    id: string;
    name: string;
    value_name: string;
}

export interface Description {
    plain_text: string;
}

export interface Product {
    id: string;
    title: string;
    price: number;
    reviews?: Reviews;
    thumbnail?: string;
    pictures?: Picture[];
    shipping?: Shipping;
    condition: ConditionType;
    currency_id: string;
    installments?: Installments;
    description?: Description;
    attributes?: Attribute[];
    warranty?: string;
    sold_quantity?: number;
    available_quantity?: number;
    permalink?: string;
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
