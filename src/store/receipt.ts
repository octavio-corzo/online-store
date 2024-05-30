import { defineStore } from "pinia";
import axios from "axios";
import { Receipt, Receipts } from "../interfaces/receipt";


const API = 'http://localhost:8080/api/';

export const useReceiptStore = defineStore({
    id: 'receipt',
    state: () => ({
        receipts: [] as Receipt[]
    }),
    actions: {
        async getReceipts(): Promise<void>{
            try {
                axios.get<Receipts>(`${API}receipt/`).then((response) => {
                    this.receipts = response.data.receipts[0];
                    console.log(response.data.receipts);
                })
            } catch (error) {
                console.log(error);
                
            }
        }
    }
});