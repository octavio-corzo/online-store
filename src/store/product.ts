import { defineStore } from "pinia";
import axios from 'axios';
import { Product, Proudcts } from "../interfaces/product";


const API = 'http://localhost:8080/api/';


export const useProductStore = defineStore({
    id: 'product',
    state: () => ({
        products: [] as Product[]
    }),
    actions: {
        async getProducts(): Promise<void>{
            try {
                axios.get<Proudcts>(`${API}products/`).then((response) => {
                    this.products = response.data.products
                    console.log(response.data.products);
                })
            } catch (error) {
                console.log(error);
                
            }
        }
    }
})