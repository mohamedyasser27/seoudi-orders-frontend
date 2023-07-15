const uri = "http://localhost:3000/";
async function fetchResource(uri: string) {
  const response = await fetch(uri);
  const data = await response.json();
  return data;
}

const fetchOrdersData = async function () {
  return await fetchResource(uri + "orders");
};

const fetchColumnNames = async function () {
  return await fetchResource(uri + "orderProperties");
};

export { fetchColumnNames, fetchOrdersData };
