<script setup lang="ts">
import { type Order } from "../types/Order";

const items: Order = [
  {
    id: 1,
    order_number: "ORD001",
    order_date: new Date("2023-07-01T21:00:00.000Z"),
    customer_id: 1,
    flag: true,
    order_total: 100,
    order_tax: 10,
  },
  {
    id: 2,
    order_number: "ORD002",
    order_date: new Date("2023-07-02T21:00:00.000Z"),
    customer_id: 2,
    flag: false,
    order_total: 200,
    order_tax: 20,
  },
  {
    id: 3,
    order_number: "ORD003",
    order_date: new Date("2023-07-03T21:00:00.000Z"),
    customer_id: 3,
    flag: true,
    order_total: 300,
    order_tax: 30,
  },
];
</script>

<template>hi i am stats</template>

<style scoped></style>
