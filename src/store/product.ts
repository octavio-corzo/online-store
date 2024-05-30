import { defineStore } from "pinia";
import axios from 'axios';
import { Product, ProductsResponse } from "../interfaces/product";

const API = 'http://localhost:8080/api/';

export const useProductStore = defineStore({
    id: 'product',
    state: () => ({
        products: [] as Product[],
    }),
    actions: {
        async getProducts(): Promise<void> {
            try {
                await axios.get<ProductsResponse>(`${API}products/`).then((response) => {
                    this.products = response.data.products[0];
                    console.log(response.data);
                });
            } catch (error) {
                console.log(error);     
            }
        },
        async postProduct(product: Omit<Product, '_id' | '__v'>): Promise<void> {
            try {
                await axios.post(`${API}products/`, product).then((response) => {
                    console.log(response.data);
                    this.getProducts();
                });
            } catch (error) {
                console.log(error);
            }
        }
    }
});
