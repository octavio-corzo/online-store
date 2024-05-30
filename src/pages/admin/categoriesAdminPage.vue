<template>
    <div>
        <h1>Categories Admin Page</h1>

        <v-table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Cantidad de productos</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in paginatedCategories" :key="index">
                    <td>{{ item._id }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.products.length }}</td>
                </tr>
            </tbody>
        </v-table>

        <v-pagination v-model="currentPage" :length="totalPages" @input="onPageChange"></v-pagination>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useCategoryStore } from '../../store/category';


const categoryStore = useCategoryStore();
const currentPage = ref(1);
const itemsPerPage = ref(10);


onMounted(() => {
    categoryStore.getCategories();
});

const totalPages = computed(() => {
    return Math.ceil(categoryStore.categories.length / itemsPerPage.value);
});


const paginatedCategories = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage.value;
    const end = start + itemsPerPage.value;

    return categoryStore.categories.slice(start, end);
});

const onPageChange = (page: number) => {
    currentPage.value = page;
};

</script>

<style scoped></style>