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
  <div
    v-if="statistics.length != 0"
    class="max-w-5xl rounded-lg bg-gray-100 p-4 shadow-lg"
  >
    <table class="w-full table-auto" aria-label="statistics table">
      <thead>
        <tr>
          <th
            v-for="item in statistics"
            class="border-b border-gray-300 bg-gray-200 px-1 py-2 text-left text-[.8rem] lg:px-4 lg:text-base"
          >
          
            {{ item.name }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr class="hover:bg-gray-50">
          <td
            v-for="item in statistics"
            class="px-1 py-2 text-[.8rem] lg:px-4 lg:text-base"
          >
            {{ item.value }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <NoDataFound
    :error-msg="'No Data Found'"
    v-else="statistics.length == 0"
  ></NoDataFound>
</template>
