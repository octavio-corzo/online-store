export interface ProductsResponse {
    msg: string;
    products: Product[][];
}

export interface Product {
    _id: string;
    name: string;
    price: number;
    category?: string;
    description?: string;
    available: boolean;
}
