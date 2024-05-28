
export interface Categories {
    categories: Category[]
};


export interface Category {
    _id:      string;
    name:     string;
    status:   boolean;
    user:     string;
    products: string[];
};
