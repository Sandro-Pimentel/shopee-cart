import wishlistOption from "./services/wishlist.js";
import myCartOption from "./services/myCart.js";
import avaliableItemsOption from "./services/avaliableItems.js"; 
import { products, cart, wishlist } from "./data/lists.js";
import { displayOptions } from "./utils/logs.js";
import { verifyOptions } from "./utils/verify.js";

const avaliableItems = products;
const myCart = cart;
const myWhishList = wishlist;

(async function main() {
    console.log("Bem-vindo a Shopee Store!");

    while(true) {
        await displayOptions();

        const option = await verifyOptions("Escolha uma opcao: ", 3);

        if(option === 0) break;

        switch(option) {
            case 2:
                await myCartOption();

                break;
            
            case 3:
                await wishlistOption();
                
                break;

            default:
                await avaliableItemsOption();

                break;
        }
    }
})();
