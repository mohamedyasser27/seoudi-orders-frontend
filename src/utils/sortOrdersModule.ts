import type { ToRefs } from "vue";
import { getTime } from "./parseDate";
import type { Order } from "@/types/Order";

function sortNumerical(
  columnName: string,
  allOrders: Array<Order>,
): Array<Order> {
  return allOrders.sort((result: Order, result2: Order): number => {
    return result[columnName] - result2[columnName];
  });
}
function sortAlphabetical(
  columnName: string,
  allOrders: Array<Order>,
): Array<Order> {
  return allOrders.sort((result1, result2) =>
    result1[columnName]
      .toLowerCase()
      .localeCompare(result2[columnName.split(" ").join("_")].toLowerCase()),
  );
}
function sortByDate(allOrders: Array<Order>): Array<Order> {
  return allOrders.sort((result: Order, result2: Order): number => {
    return getTime(result.order_date) - getTime(result2.order_date);
  });
}
function sort(
  columnName: string,
  rowSample: ToRefs<Order>,
  allOrders: Array<Order>,
) {
  columnName = columnName.split(" ").join("_");
  const ColumnType = typeof rowSample[columnName].value;
  if (columnName == "order_date") {
    sortByDate(allOrders);
  } else if (ColumnType == "string") {
    sortAlphabetical(columnName, allOrders);
  } else {
    sortNumerical(columnName, allOrders);
  }
}

const sorter = {
  sort
};

export default sorter;
