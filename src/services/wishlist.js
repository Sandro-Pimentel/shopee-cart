import * as  lists from "../data/lists.js";
import * as cartService from "../services/cart.js";
import { displayHeader, displayProduts, displayYourListOptions } from "../utils/logs.js";
import { verifyOptions } from "../utils/verify.js";
import createItem from "./item.js";

async function wishlistOption() {
    let option;
    
    while(option !== 0) {
        await displayHeader("Minha lista de desejos");

        await displayProduts(lists.wishlist);
    
        await displayYourListOptions();
        
        option = await verifyOptions("Selecione uma opção: ", 5);

        switch(option) {
            case 1:
                await displayProduts(lists.products, true);

                const index = await verifyOptions("Escolha o produto para adicioná-lo ", lists.products.length); 

                const item = lists.products[index - 1];

                await cartService.addItem(lists.wishlist, await createItem(item.name, item.price, 1));

                console.log(`${item.name} adicionado com sucesso!\n`);
                
                break;

            case 2:
                if(lists.wishlist.length > 0) {
                    await displayProduts(lists.wishlist);
                    
                    const index = await verifyOptions("Escolha o produto para incrementar um ", lists.wishlist.length);

                    await cartService.incrementItem(lists.wishlist, lists.wishlist[index - 1]);
                }

                break;

            case 3:
                if(lists.wishlist.length > 0) {
                    await displayProduts(lists.wishlist);
                    
                    const index = await verifyOptions("Escolha o produto para remover ", lists.wishlist.length);

                    const item = lists.wishlist[index - 1];

                    await cartService.deleteItem(lists.wishlist, item);

                    console.log(`${item.name} removido com sucesso!\n`);
                }
                
                break;

            case 4:
                if(lists.wishlist.length > 0) {
                    await displayProduts(lists.wishlist);
                    
                    const index = await verifyOptions("Escolha o produto para decrementar um ", lists.wishlist.length);

                    await cartService.removeItem(lists.wishlist, lists.wishlist[index - 1]);
                }

                break;

            case 5:
                if(lists.wishlist.length > 0) {
                    await displayProduts(lists.wishlist);
                    
                    const index = await verifyOptions("Escolha o produto para mover para o carrinho ", lists.wishlist.length);

                    await cartService.moveItem(lists.wishlist, lists.cart, lists.wishlist[index - 1]);
                }
                
                break;
        }
    }
}

export default wishlistOption;
