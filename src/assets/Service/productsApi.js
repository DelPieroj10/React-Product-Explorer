const ENDPOINT_PRODUCTS_API = "https://fakestoreapi.com/products"; 

export const getProducts = async () => {
    const res = await fetch(ENDPOINT_PRODUCTS_API);
    if(!res.ok){
        throw new Error("Failed to fetch products");
    }

    const data = await res.json();
    return data;
}