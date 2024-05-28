export interface Proudcts {
    products: Product[]
};

export interface Product {
    _id:         string;
    name:        string;
    price:       number;
    category:    string;
    description: string;
    available:   boolean;
}
