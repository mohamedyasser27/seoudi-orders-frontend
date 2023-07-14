const fetchOrders =async function () {
    const response = await fetch("http://localhost:3000/read");
    const data = await response.json();
    return data;
};

export default fetchOrders;
