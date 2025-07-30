import createItem from "../services/item.js";

const products = [];
const cart = [];
const wishlist = [];

products.push(await createItem("Caderno", 39.99, 10));
products.push(await createItem("Caneta", 5.99, 10));
products.push(await createItem("Lapis", 3.99, 10));
products.push(await createItem("Borracha", 2.99, 10));
products.push(await createItem("Estojo", 29.99, 10));
products.push(await createItem("Lapis de Cor - 16 unidades", 10.99, 10));

export { products, cart, wishlist };
