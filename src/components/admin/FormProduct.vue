<template>
    <div>
        <h1>Form Product</h1>
        <v-form :model="form" @submit="postProduct">
            <v-input v-model="form.name" label="Name" />
            <v-input v-model="form.price" label="Price" />
            <v-input v-model="form.category" label="Category" />
            <v-input v-model="form.description" label="Description" />
            <v-checkbox v-model="form.available" label="Available" />
            <v-button type="submit">Submit</v-button>
        </v-form>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useProductStore } from '../../store/product';

const productStore = useProductStore();


const form = ref({
    name: '',
    price: 0,
    category: '',
    description: '',
    available: false,
});

const postProduct = async () => {
    try {
        await productStore.postProduct(form.value);
        console.log('Product posted successfully');
    } catch (error) {
        console.error('Failed to post product', error);
    }
};


onMounted(postProduct);
</script>

<style scoped></style>