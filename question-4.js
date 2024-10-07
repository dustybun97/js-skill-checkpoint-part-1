// Question #4
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
  { name: "Orange", price: 30, quantity: 60 },
];
// เริ่มเขียนโค้ดตรงนี้
let leastestQuantity = inventory[0].quantity;
let leastestFruit = inventory[0].name;

for (let i = 0;i < inventory.length; i++) {
if (inventory[i].quantity < leastestQuantity){
  leastestQuantity = inventory[i].quantity;
  leastestFruit = inventory[i].name;
}
}
console.log(`สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ ${leastestFruit} ซึ่งมี ${leastestQuantity} ชิ้น`);


