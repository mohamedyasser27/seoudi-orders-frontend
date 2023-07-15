<script setup lang="ts">
import { onMounted, ref, type Ref } from "vue";
import NoDataFound from "@/components/NoDataFound.vue";
import { fetchOrdersData } from "@/utils/fetchOrders";
import { getAllStatistics, type Statistic } from "@/utils/getStatistics";

const statistics: Ref<Array<Statistic>> = ref([]);

onMounted(async () => {
  const data = await fetchOrdersData();
  if (!data.hasOwnProperty("errorMsg")) {
    statistics.value = getAllStatistics(data);
  }
});
</script>

<template>
  <Transition name="fade" mode="out-in">
    <div
      v-if="statistics.length != 0"
      class="max-w-5xl rounded-lg bg-gray-100 p-4 shadow-lg"
    >
      <div
        class="grid grid-cols-1 items-center justify-center gap-4 md:grid-cols-2"
      >
        <div
          v-for="item in statistics"
          :key="item.name"
          class="group h-full rounded-lg bg-gray-200 p-8 text-center transition-colors duration-100 hover:bg-slate-500"
          style="width: 300px"
        >
          <h3
            class="mb-4 text-2xl font-bold text-blue-600 transition-colors duration-100 group-hover:text-blue-300"
          >
            {{ item.name }}
          </h3>
          <p
            class="text-4xl transition-colors duration-100 group-hover:text-slate-50"
          >
            {{ item.value }}
          </p>
        </div>
      </div>
    </div>
    <NoDataFound
      :error-msg="'No Data Found'"
      v-else="statistics.length == 0"
    ></NoDataFound>
  </Transition>
</template>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition:
    opacity 0.2s ease-in-out,
    translate 0.2s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  translate: 0px 20px;
}
</style>
