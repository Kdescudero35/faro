export interface Installments {
    rate?: number;
    amount: number;
    quantity: number;
    currency_id?: string;
}

export interface Shipping {
    mode?: string;
    free_shipping: boolean;
    logistic_type?: string;
    store_pick_up?: boolean;
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

export interface SellerAddress {
    city: {
        name: string;
    };
    state: {
        name: string;
    };
}

export interface Product {
    id: string;
    title: string;
    price: number;
    reviews?: Reviews;
    pictures?: Picture[];
    shipping?: Shipping;
    condition: ConditionType;
    warranty?: string | null;
    thumbnail?: string;
    permalink?: string;
    currency_id: string;
    attributes?: Attribute[];
    description?: Description;
    installments?: Installments;
    sold_quantity?: number;
    original_price?: number | null;
    seller_address?: SellerAddress;
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
