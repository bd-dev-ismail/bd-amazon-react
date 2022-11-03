import { getStoredCart } from "../utilities/fakedb";

export const productAndCart = async ()=>{
    const productsData = await fetch("http://localhost:5000/products");
    const {products} = await productsData.json();

    //get cart
    const savedCart = getStoredCart();
    const inititalCart = [];
    for(const id in savedCart){
        const addedProducts = products.find(product => product._id === id);
        if(addedProducts){
            const quantity = savedCart[id];
            addedProducts.quantity = quantity;
            inititalCart.push(addedProducts);
        }
    }
    return { products, inititalCart };
}