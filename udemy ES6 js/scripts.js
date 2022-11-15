"use strict";
/*
///////////////////////////////////////
// THE forEACH Helper
let colors = ["red", "blue", "green"];

colors.forEach((color) => console.log(`hey I am ${color}`));

let numbers = [1, 2, 3, 4, 5];
let sum1 = 0;

numbers.forEach((number) => (sum1 += number));
console.log(sum1);

let sum2 = 0;
function adder(number) {
  sum2 += number;
}

numbers.forEach(adder);
console.log(sum2);


///////////////////////////////////////////
// THE MAP HELPER//must contain a return keyword
numbers = [1, 2, 3];
let doubledNumbers = numbers.map(number => number * 2);
console.log(doubledNumbers);

let cars = [
  {model:'buick',price:'cheap'},
  {model:'camaro',price:'expensive'}
]

let details = cars.map(car => car.price);
console.log(details);
///////////////////////////
// THE FILTER HELPER
//

let products = [
  { name: "cucumber", type: "vegetable", quantity: 0, price: 1 },
  { name: "banana", type: "fruit", quantity: 10, price: 15 },
  { name: "celery", type: "vegetable", quantity: 30, price: 9 },
  { name: "orange", type: "fruit", quantity: 3, price: 5 }
];

// type is 'vegetable', quantity is greater than 0,price is less than 10

let select = products.filter(product => product.type === 'vegetable' && product.quantity > 0 && product.price < 10);
console.log(select);
*/

/////////////////////////
// THE FIND HELPER
let users = [
  { name: "jill" },
  { name: "bill", id: 5 },
  { name: "jack" },
  { name: "bill" },
];

let bill = users.find((user) => user.name === "bill");
console.log(bill);
/////////////////////////
function Car(model, price) {
  this.model = model;
  // this.price = price;
}
let cars = [
  new Car("buick" /*`2.6$`*/),
  new Car("camaro" /*`2.6$`*/),
  new Car("Focus" /*`2.6$`*/),
];
console.log(cars[1]);

const carModelFocus = cars.find((car) => car.model === "Focus");
console.log(carModelFocus);
///////////////////////






