import { type Order } from "@/types/Order";
import { type Statistic } from "@/types/Statistic";


let allOrders!: Array<Order>;

function getNumberOfOrders(): Statistic {
  return { name: "number of orders", value: allOrders.length };
}

function getTotalRevenue(): Statistic {
  return {
    name: "Total Price of Orders",
    value: allOrders.reduce((totalPrice, currentOrder) => {
      return totalPrice + currentOrder.order_total;
    }, 0),
  };
}

function getAverageOrderTotal(): Statistic {
  return {
    name: "Average Price of Orders",
    value:
      getTotalRevenue().value / getNumberOfOrders().value,
  };
}

function getLargestRevenueOrder(): Statistic {
  const largestOrder = allOrders.reduce(
    (largestOrder: Order, currentOrder: Order) => {
      if (currentOrder.order_total > largestOrder.order_total) {
        return currentOrder;
      }
      return largestOrder;
    },
  );
  return { name: "largest Revenue Order", value: largestOrder.order_total };
}

function getAllStatistics(recievedOrders: Array<Order>): Array<Statistic> {
  allOrders = recievedOrders;
  return [
    getNumberOfOrders(),
    getTotalRevenue(),
    getLargestRevenueOrder(),
    getAverageOrderTotal(),
  ];
}
export {type Statistic, getAllStatistics };
