const uri = "https://orders-seoudi.onrender.com/";
async function fetchResource(uri: string) {
  const response = await fetch(uri);
  const data = await response.json();
  return data;
}

const fetchOrdersData = async function (name?: string) {
  return await fetchResource(`${uri}orders/${name ? name : ""}`);
};

export { fetchOrdersData };
