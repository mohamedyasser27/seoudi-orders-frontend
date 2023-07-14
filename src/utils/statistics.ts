import { type Order } from "../types/Order";

interface Result {
  name: string;
  value: BigInteger;
}
let allOrders: Array<Order> = null;

function getNumberOfOrders(): Result {
  return { name: "number of orders", value: allOrders.length };
}

function getTotalRevenue(): Result {
  return {
    name: "Total Price of Orders",
    value: allOrders.reduce((totalPrice, currentOrder) => {
      return totalPrice + currentOrder.order_total;
    }, 0),
  };
}

function getAverageOrderTotal(): Result {
  return {
    name: "Average Price of Orders",
    value:
      getTotalRevenue(allOrders).value / getNumberOfOrders(allOrders).value,
  };
}

function getLargestRevenueOrder(): Result {
  const largestOrder = allOrders.reduce((largestOrder, currentOrder) => {
    if (currentOrder.order_total > largestOrder.order_total) {
      return currentOrder;
    }
    return largestOrder;
  });
  return { name: "largest Revenue Order", value: largestOrder.order_total };
}

function getAllStatistics(recievedOrders: Array<Order>): Array<Result> {
  allOrders = recievedOrders;
  return [
    getNumberOfOrders(),
    getTotalRevenue(),
    getLargestRevenueOrder(),
    getAverageOrderTotal(),
  ];
}
export { Result, getAllStatistics };
