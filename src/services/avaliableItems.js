import { displayProduts, displayAvaliableProdOptions, displayHeader } from "../utils/logs.js";
import { products } from "../data/lists.js";
import { verifyOptions } from "../utils/verify.js";
import wishlistOption from "./wishlist.js";
import myCartOption from "./myCart.js";

async function avaliableItemsOption() {
    let option;

    while(option !== 0) {
        await displayHeader("Meu carrinho");

        await displayProduts(products);

        await displayAvaliableProdOptions();

        option = await verifyOptions("Selecione uma opção: ", 2);

        switch(option) {
            case 1:
                await wishlistOption();

                break;
            
            case 2:
                await myCartOption();    

                break;
        }
    }
}

export default avaliableItemsOption;
