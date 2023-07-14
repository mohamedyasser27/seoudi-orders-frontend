interface Order {
  id: number;
  order_number: string;
  order_date: Date;
  customer_id: number;
  flag: boolean;
  order_total: number;
  order_tax: number;
}

export { Order };