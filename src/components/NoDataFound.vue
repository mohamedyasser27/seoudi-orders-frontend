<script setup lang="ts">
const props = defineProps({
  errorMsg:String,
})

</script>

<template>
  <div
    class="mx-6 flex max-w-5xl items-center justify-center rounded-lg bg-gray-100 p-4 shadow-lg"
  >
    <div class="text-center">
      <div class="text-[.8rem] text-gray-500 lg:text-base">{{ errorMsg }}</div>
    </div>
  </div>
</template>

