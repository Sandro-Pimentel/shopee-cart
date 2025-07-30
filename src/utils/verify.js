import getInputNumber from "./prompt.js";

async function verifyOptions(message, nOptions) {
    let number = await getInputNumber(message);

    while(number < 0 || number > nOptions || !Number.isInteger(number)) {
        number = await getInputNumber("Opcao invalida! Tente novamente: ");
    }

    return number;
}

async function verifyCanIncrement(avaliableProds, item) {
    const index = avaliableProds.findIndex(prod => prod.name === item.name);

    if(avaliableProds[index].quantity > item.quantity) return true;

    console.log(`Falha ao incrementar, quantidade do estoque insuficiente!\n`);
    
    return false;
}

export { verifyOptions, verifyCanIncrement };
