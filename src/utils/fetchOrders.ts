const uri = "https://orders-seoudi.onrender.com/";
async function fetchResource(uri: string) {
  const response = await fetch(uri);
  const data = await response.json();
  return data;
}

const fetchOrdersData = async function () {
  return await fetchResource(uri + "");
};

const fetchColumnNames = async function () {
  return await fetchResource(uri + "orderProperties");
};

export { fetchColumnNames, fetchOrdersData };
