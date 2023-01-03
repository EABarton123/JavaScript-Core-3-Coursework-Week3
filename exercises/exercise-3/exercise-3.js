let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];

function printReceipt(order) {
  let total = 0;
  const columns = ["QTY", "ITEM", "TOTAL"];
  const data = [];
  let item = order.forEach((item) => data.push(itemName));
  let qty = order.forEach((item) => data.push(quantity));
  let totalItem = order.forEach((item) => {
    const sum = unitPrice * quantity;
    total += sum;
  });

  console.table(data, columns);
}
