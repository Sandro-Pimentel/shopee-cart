//quais açoes meu carrinho pode fazer

//CASOS DE USO
// ✅ -> adicionar item no carrinho
async function addItem(userCart, item) {
  userCart.push(item);
}

async function incrementItem(userCart, item) {
  //1. encontrar o indice do item
  const indexFound = userCart.findIndex((p) => p.name === item.name);

  //2. Caso não encontre o item
  if (indexFound == -1) {
    console.log("item não encontrado\n");
    return;
  }

  //4. caso contrário adiciona 1 na quantidade
  userCart[indexFound].quantity++;
}

// ✅ -> calcular o total do carrinho
async function calculateTotal(userCart) {
  console.log("\nShopee Cart TOTAL IS:");

  const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
  console.log(`🎁Total: ${result}\n`);
}

// -> deletar item do carrinho
async function deleteItem(userCart, item) {
  const index = userCart.findIndex((p) => p.name === item.name);

  if (index !== -1) {
    userCart.splice(index, 1);
  }
}

// -> ✅ remover um item - diminui um item
async function removeItem(userCart, item) {
  //1. encontrar o indice do item
  const indexFound = userCart.findIndex((p) => p.name === item.name);

  //2. Caso não encontre o item
  if (indexFound == -1) {
    console.log("item não encontrado\n");
    return;
  }

  //3. item > 1 subtrair um item
  if (userCart[indexFound].quantity > 1) {
    userCart[indexFound].quantity--;
    return;
  }

  //4. caso item = 1 deletar o item
  if (userCart[indexFound].quantity == 1) {
    userCart.splice(indexFound, 1);
    return;
  }
}

async function moveItem(cartFrom, cartTo, item) {
  const indexFound = cartFrom.findIndex((p) => p.name === item.name);

  if (indexFound == -1) {
    console.log("item não encontrado\n");
    return;
  }

  await addItem(cartTo, cartFrom[indexFound]); 
  await deleteItem(cartFrom, cartFrom[indexFound]);
}

export { addItem, incrementItem, calculateTotal, deleteItem, removeItem, moveItem };