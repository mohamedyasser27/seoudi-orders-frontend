<script setup lang="ts">
import { onMounted, reactive, toRefs } from "vue";
import { type Order } from "@/types/Order";
import NoDataFound from "@/components/NoDataFound.vue";
import { fetchOrdersData, fetchColumnNames } from "@/utils/fetchOrders";
import { getLocaleDateString } from "@/utils/parseDate";
import sorter from "@/utils/sortOrdersModule";
const columnNames: { values: Array<string> } = reactive({ values: [] });
const allOrders: { values: Order[] } = reactive({ values: [] });
const currentSort: { name: string } = reactive({ name: "" });

onMounted(async () => {
  const [data, metaData] = await Promise.all([
    fetchOrdersData(),
    fetchColumnNames(),
  ]);
  
  allOrders.values = data;
  columnNames.values = metaData;
});
</script>

<template>
  <div
    class="max-w-5xl rounded-lg bg-gray-100 p-4 shadow-lg"
    v-if="allOrders.values.length != 0"
  >
    <table class="w-full table-auto" aria-label="Orders Table">
      <thead>
        <tr>
          <th
            v-for="(columnName) in columnNames.values"
            :class="` ${currentSort.name == columnName && 'text-red-700'} 
               border-b border-gray-300 bg-gray-200 px-1 py-2 text-left text-[.8rem] lg:px-4 lg:text-base`"
          >
            <button
              @click="
                () => {
                  currentSort.name = columnName;
                  sorter.sort(
                    columnName,
                    toRefs(allOrders.values[0]),
                    allOrders.values,
                  );
                }
              "
            >
              {{ columnName }}
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr class="hover:bg-gray-50" v-for="order in allOrders.values">
          <td
            v-for="(columnValue, columnName) in order"
            class="px-1 py-2 text-[.8rem] lg:px-4 lg:text-base"
          >
            {{
              columnName === "order_date"
                ? getLocaleDateString(columnValue)
                : columnValue
            }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <NoDataFound :error-msg="'No Data Found'" class="" v-else></NoDataFound>
</template>
