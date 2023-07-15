<script setup lang="ts">
import { onMounted, reactive, ref } from "vue";
import { type Order } from "@/types/Order";
import NoDataFound from "@/components/NoDataFound.vue";
import { fetchOrdersData, fetchColumnNames } from "@/utils/fetchOrders";
import { getLocaleDateString } from "@/utils/parseDate";

const columnNames = ref<Array<string>>([]);
const allOrders = ref<Array<Order>>([]);
const currentSort = ref<string>("");

onMounted(async () => {
  const [data, metaData] = await Promise.all([
    fetchOrdersData(),
    fetchColumnNames(),
  ]);

  allOrders.value = data;
  columnNames.value = metaData;
});
</script>

<template>
  <div
    class="max-w-5xl rounded-lg bg-gray-100 p-3 shadow-lg"
    v-if="allOrders.length != 0"
  >
    <table class="w-full table-auto" aria-label="Orders Table">
      <thead>
        <tr>
          <th
            v-for="columnName in columnNames"
            :class="`${
              currentSort == columnName && 'text-red-700'
            }  border-b border-gray-300 bg-gray-200 px-1 py-2 text-left text-[.7rem] md:text-[.8rem] lg:px-4 lg:text-base`"
          >
            <button
              class="break-words"
              @click="
                () => {
                  fetchOrdersData(columnName).then((data) => {
                    currentSort = columnName;
                    allOrders = data;
                  });
                }
              "
            >
              {{ columnName.split("_").join(" ") }}
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="transition-colors duration-100 hover:bg-slate-500 hover:text-slate-50"
          v-for="order in allOrders"
        >
          <td
            v-for="(columnValue, columnName) in order"
            class="px-1 py-2 text-[.7rem] md:text-[.8rem] lg:px-4 lg:text-base"
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
