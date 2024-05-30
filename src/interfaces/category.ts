
export interface Categories {
    msg: string;
    categories: Category[][];
};


export interface Category {
    _id:      string;
    name:     string;
    status:   boolean;
    user:     string;
    products: string[];
    totalProducts: number;
};
