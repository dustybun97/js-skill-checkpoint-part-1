// Question #2
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
];
// เริ่มเขียนโค้ดตรงนี้
let sumOfApple =0;
let sumOfBanana =0;
let sumOfOrange =0;
inventory[0].quantity = 200;
//console.log(inventory[0].quantity); //ดูค่าที่ reassign
inventory.push({name: "Orange", price: 20, quantity: 300});
//console.log(inventory); // ดู orange ที่เพิ่มมา
sumOfApple = inventory[0].price * inventory[0].quantity;
sumOfBanana = inventory[1].price * inventory[1].quantity;
sumOfOrange = inventory[2].price * inventory[2].quantity;
let sumOfAll = sumOfApple + sumOfBanana + sumOfOrange;
console.log(`มูลค่ารวมของจำนวนสินค้าทั้งหมดในสต็อก ${sumOfAll} บาท`);


