async function displayOptions() {
    console.log(`Opções disponíveis:\n`);
    console.log(`1 - Visualizar produtos disponiveis`);
    console.log(`2 - Visualizar seu carrinho`);
    console.log(`3 - Visualizar sua lista de desejos`);
    console.log(`0 - Encerrar aplicação\n`);
}

async function displayYourListOptions() {
    console.log(`Opções disponíveis:\n`);
    console.log(`1 - Adicionar produto`);
    console.log(`2 - Incrementar quantidade de um produto`);
    console.log(`3 - Remover produto`);
    console.log(`4 - Decrementar quantidade de um produto`);
    console.log(`5 - Mover produto para o carrinho`);
    console.log(`0 - Voltar\n`);
}

async function displayAvaliableProdOptions() {
    console.log(`Opções disponíveis:\n`);
    console.log(`1 - Ir para a lista de desejos`);
    console.log(`2 - Ir para o carrinho`);
    console.log(`0 - Voltar\n`);
}

async function displayProduts(productList, isAvaliableProduct = false) {
    if(productList.length === 0) {
        console.log("A sua lista está vazia no momento.\n")
        return;
    }
    
    console.log(isAvaliableProduct ? "Produtos disponíveis: " : "Sua lista: ");

    console.log(`--------------------------------`);
    productList.forEach((product, index) => {
        console.log(`${index + 1} - ${product.name} - R$${product.price}`);
        console.log(`${isAvaliableProduct ? `Estoque: ${product.quantity}` : `Quantidade: ${product.quantity}\nSubtotal: ${product.subtotal()}`}`);
        console.log(`--------------------------------`);
    });
    console.log();
}

async function displayHeader(title) {
    console.log(`-----------------------`);
    console.log(`${title.toUpperCase()}`);
    console.log(`-----------------------`);
}

export { displayOptions, displayProduts, displayYourListOptions, displayAvaliableProdOptions, displayHeader };
