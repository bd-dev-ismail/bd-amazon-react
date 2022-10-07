import { getStoredCart } from "../utilities/fakedb";

export const productAndCart = async ()=>{
    const productsData = await fetch("products.json");
    const products = await productsData.json();

    //get cart
    const savedCart = getStoredCart();
    const inititalCart = [];
    for(const id in savedCart){
        const addedProducts = products.find(product => product.id === id);
        if(addedProducts){
            const quantity = savedCart[id];
            addedProducts.quantity = quantity;
            inititalCart.push(addedProducts);
        }
    }
    return { products, inititalCart };
}