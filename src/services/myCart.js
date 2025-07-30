import * as lists from "../data/lists.js";
import * as cartService from "../services/cart.js";
import { displayProduts, displayYourListOptions, displayHeader } from "../utils/logs.js";
import { verifyCanIncrement, verifyOptions } from "../utils/verify.js";
import createItem from "./item.js";

async function myCartOption() {
    let option;

    while(option !== 0) {
        await displayHeader("Meu carrinho");

        await displayProduts(lists.cart);

        await displayYourListOptions();

        option = await verifyOptions("Selecione uma opção: ", 5);

        switch(option) {
            case 1:
                await displayProduts(lists.products, true);

                const index = await verifyOptions("Escolha o produto para adicioná-lo ", lists.products.length);

                const item = lists.products[index - 1];

                await cartService.addItem(lists.cart, await createItem(item.name, item.price, 1));
                
                console.log(`${item.name} adicionado com sucesso!\n`);
                
                break;
            case 2:
                // Não pode incrementar mais do que a quantidade do estoque
                if(lists.cart.length > 0) {
                    await displayProduts(lists.cart);

                    const index = await verifyOptions("Escolha o produto para incrementar um ", lists.cart.length);

                    const item = lists.cart[index - 1];

                    if(!await verifyCanIncrement(lists.products, item)) break;

                    await cartService.incrementItem(lists.cart, item);
                }
                
                break;
            case 3:
                if(lists.cart.length > 0) {
                    await displayProduts(lists.cart);

                    const index = await verifyOptions("Escolha o produto para remover ", lists.cart.length);

                    const item = lists.cart[index - 1];

                    await cartService.deleteItem(lists.cart, item);

                    console.log(`${item.name} removido com sucesso!\n`);
                }

                break;
            case 4:
                if(lists.cart.length > 0) {
                    await displayProduts(lists.cart);
                    
                    const index = await verifyOptions("Escolha o produto para decrementar um ", lists.cart.length);

                    await cartService.removeItem(lists.cart, lists.cart[index - 1]);
                }

                break;
            case 5:
                if(lists.cart.length > 0){
                    await displayProduts(lists.cart);

                    const index = await verifyOptions("Escolha o produto para mover para a lista de desejos ", lists.cart.length);

                    await cartService.moveItem(lists.cart, lists.wishlist, lists.cart[index - 1]);
                }

                break;
        }
    }
}

export default myCartOption;
