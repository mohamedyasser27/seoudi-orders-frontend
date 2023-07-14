<script setup lang="ts">
import { onMounted, ref, type Ref } from "vue";
import { type Order } from "../types/Order";
import NoDataFound from "../components/NoDataFound.vue";
import { fetchOrdersData, fetchColumnNames } from "../utils/fetchOrders";

const allOrders: Ref<Array<Order>> = ref([]);
const columnNames: Ref<Array<string>> = ref([]);

onMounted(async () => {
  try {
    const [data, metaData] = await Promise.all([
      fetchOrdersData(),
      fetchColumnNames(),
    ]);


    allOrders.value = data;
    columnNames.value = metaData;
  } catch (error) {
    console.error(error);
  }
});
</script>

<template>
  <div
    class="max-w-5xl rounded-lg bg-gray-100 p-4 shadow-lg"
    v-if="allOrders.length != 0"
  >
    <table class="w-full table-auto">
      <thead>
        <tr>
          <th
            v-for="columnName in columnNames"
            class="border-b border-gray-300 bg-gray-200 px-1 py-2 text-left text-[.8rem] lg:px-4 lg:text-base"
          >
            {{ columnName.split("_").join(" ") }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr class="hover:bg-gray-50" v-for="order in allOrders">
          <td
            v-for="(orderPropertyName, key) in order"
            class="px-1 py-2 text-[.8rem] lg:px-4 lg:text-base"
          >
            {{
              key === "order_date"
                ? new Date(String(orderPropertyName)).toLocaleDateString()
                : orderPropertyName
            }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <NoDataFound :error-msg="'No Data Found'" class="" v-else></NoDataFound>
</template>

<style scoped></style>
