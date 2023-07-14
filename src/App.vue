<script setup lang="ts">
import Header from "./components/Header.vue";
</script>

<template>
  <Header></Header>
  <div class="min-h-full flex justify-center mt-10">
    <RouterView></RouterView>
  </div>
</template>

<style scoped></style>
