<template>
    <div>
        <h1>Products Admin Page</h1>

        <v-table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Categoria</th>
                    <th>Descripción</th>
                    <th>Disponible</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in paginatedProducts" :key="index">
                    <td>{{ item._id }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.price }}</td>
                    <td>{{ item.category }}</td>
                    <td>{{ item.description }}</td>
                    <td>{{ item.available }}</td>
                </tr>
            </tbody>
        </v-table>

        <v-pagination v-model="currentPage" :length="totalPages" @input="onPageChange"></v-pagination>
    </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { useProductStore } from '../../store/product';

const productStore = useProductStore();
const currentPage = ref(1);
const itemsPerPage = ref(10);

onMounted(() => {
    productStore.getProducts();
});

const totalPages = computed(() => {
    return Math.ceil(productStore.products.length / itemsPerPage.value);
});

const paginatedProducts = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage.value;
    const end = start + itemsPerPage.value;

    return productStore.products.slice(start, end);
});

const onPageChange = (page: number) => {
    currentPage.value = page;
};
</script>

<style scoped></style>
