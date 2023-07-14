async function fetchResource(uri: string) {
  const response = await fetch(uri);
  const data = await response.json();
  return data;
}

const fetchOrdersData = async function () {
  return await fetchResource("http://localhost:3000/orders");
};

const fetchColumnNames = async function () {
  return await fetchResource("http://localhost:3000/orderInfo");
};

export { fetchColumnNames, fetchOrdersData };
