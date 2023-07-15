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
  <Transition name="fade" mode="out-in">
    <div
      class="max-w-5xl rounded-lg bg-gray-100 p-0 shadow-lg lg:p-3"
      v-if="allOrders.length != 0"
    >
      <table class="w-full table-auto" aria-label="Orders Table">
        <thead>
          <tr>
            <th
              v-for="columnName in columnNames"
              :class="`${
                currentSort == columnName && 'text-red-700'
              }  border-b border-gray-300 bg-gray-200 px-1 py-2 text-left text-[.6rem] md:text-[.8rem] lg:px-4 lg:text-base`"
            >
              <button
                class="flex flex-wrap items-center justify-center gap-1"
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  class="h-[15px] w-[15px] fill-current lg:h-[24px] lg:w-[24px]"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z" />
                </svg>
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
              class="px-1 py-2 text-[.7rem] md:text-[.6rem] lg:px-4 lg:text-base"
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
