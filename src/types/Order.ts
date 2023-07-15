interface Order {
  id: number;
  order_number: string;
  order_date: Date;
  customer_id: number;
  delivered: boolean;
  order_total: number;
  order_tax: number;
  [key: string]: string | number | boolean | Date;
}

export {type Order };