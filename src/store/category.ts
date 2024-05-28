import { defineStore } from "pinia";
import axios from 'axios';
import { Categories, Category } from '../interfaces/category';

const API = 'http://localhost:8080/api/';

export const useCategoryStore = defineStore({
    id: "category",
    state: () => ({
        categories: [] as Category[]
    }),
    actions: {
        async getCategories(): Promise<void>{
            try {
                axios.get<Categories>(`${API}category/`).then( (response) => {
                    this.categories = response.data.categories
                    console.log(response.data);
                })
            } catch (error) {
                console.log(error);
            }
        }
    }
})