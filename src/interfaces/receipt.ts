export interface Receipts {
    msg: string;
    receipts: Receipt[][];
};

export interface Receipt {
    _id:          string;
    name:         string;
    status:       boolean;
    admin:        string;
    client:       string;
    products:     string[];
    shoppingCart: string;
    total:        number;
};
