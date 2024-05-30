<script setup lang="ts">
import { useCategoryStore } from './store/category';
import { useUserStore } from './store/user';

const categoryStore = useCategoryStore();
const userStore = useUserStore();

categoryStore.getCategories();
userStore.getUsers();
</script>

<template>
  <v-layout>
    <v-app-bar></v-app-bar>
    <v-navigation-drawer></v-navigation-drawer>
    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-layout>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
