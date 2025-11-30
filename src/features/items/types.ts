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
    warranty?: string;
    permalink?: string;
    currency_id: string;
    attributes?: Attribute[];
    description?: Description;
    installments?: Installments;
    sold_quantity?: number;
    available_quantity?: number;
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
