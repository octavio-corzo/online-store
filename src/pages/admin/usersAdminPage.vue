<template>
    <div>
        <h1>Users Admin Page</h1>

        <v-table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Email</th>
                    <th>Role</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in paginatedUsers" :key="index">
                    <td>{{ item._id }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.email }}</td>
                    <td>{{ item.role }}</td>
                </tr>
            </tbody>
        </v-table>

        <v-pagination v-model="currentPage" :length="totalPages" @input="onPageChange"></v-pagination>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useUserStore } from '../../store/user';

const userStore = useUserStore();
const currentPage = ref(1);
const itemsPerPage = ref(10);

onMounted(() => {
    userStore.getUsers();
});

const totalPages = computed(() => {
    return Math.ceil(userStore.users.length / itemsPerPage.value);
});

const paginatedUsers = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage.value;
    const end = start + itemsPerPage.value;

    return userStore.users.slice(start, end);
});

const onPageChange = (page) => {
    currentPage.value = page;
};
</script>

<style lang="scss" scoped></style>