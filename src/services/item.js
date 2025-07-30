//CASOS DE USO DOS ITENS

// -> criar item com subtotal certo
async function createItem(name, price, quantity) {
  return {
    name,
    price,
    quantity,
    subtotal: () => (price * quantity).toFixed(2),
  };
}

export default createItem;