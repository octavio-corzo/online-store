import { defineStore } from "pinia";
import axios from "axios";
import { User, Users } from "../interfaces/user";

const API = 'http://localhost:8080/api/';


export const useUserStore = defineStore({
    id: 'user',
    state: () => ({
        users: [] as User[]
    }),
    actions: {
        async getUsers(): Promise<void>{
            try {
                axios.get<Users>(`${API}users/`).then((response) => {
                    this.users = response.data.users[0];
                    console.log(response.data);
                });

            } catch (error) {
                console.log(error);
            }
        }
    }
})