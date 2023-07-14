<script setup lang="ts">
import { RouterLink } from "vue-router";
const navItems = [
  { title: "orders", uri: "/" },
  { title: "statistics", uri: "/statistics" },
];
</script>

<template>
  <header
    class="mb-4 flex flex-wrap items-center justify-between bg-gray-200 px-6 py-4 text-gray-800 shadow-md"
  >
    <h1 class="text-2xl font-bold">all Orders</h1>
    <nav class="">
      <ul class="flex items-center gap-4">
        <RouterLink
          class="hover:text-gray-600"
          v-for="item in navItems"
          :to="item.uri"
          >{{ item.title }}</RouterLink
        >
      </ul>
    </nav>
  </header>
</template>

<style scoped></style>
