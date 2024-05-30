<template>
    <div>
        <h1>Receipts Admin Page</h1>

        <v-table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Usuario</th>
                    <th>Fecha</th>
                    <th>Total</th>
                    <th>Productos</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in paginatedReceipts" :key="index">
                    <td>{{ item._id }}</td>
                    <td>{{ item.client }}</td>
                    <td>{{ item.status }}</td>
                    <td>{{ item.total }}</td>
                </tr>
            </tbody>
        </v-table>

        <v-pagination v-model="currentPage" :length="totalPages" @input="onPageChange"></v-pagination>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useReceiptStore } from '../../store/receipt';

const receiptStore = useReceiptStore();
const currentPage = ref(1);
const itemsPerPage = ref(10);

onMounted(() => {
    receiptStore.getReceipts();
});

const totalPages = computed(() => {
    return Math.ceil(receiptStore.receipts.length / itemsPerPage.value);
});

const paginatedReceipts = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage.value;
    const end = start + itemsPerPage.value;

    return receiptStore.receipts.slice(start, end);
});

const onPageChange = (page: number) => {
    currentPage.value = page;
};
</script>

<style scoped></style>