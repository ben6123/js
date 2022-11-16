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
}

let cars = [new Car("buick"), new Car("camaro"), new Car("Focus")];
console.log(cars[1]);

const carModelFocus = cars.find((car) => car.model === "Focus");
console.log(carModelFocus);
///////////////////////
let posts = [
  { id: 1, title: "New Post" },
  { id: 2, title: "Old Post" },
];

let comments = { postId: 1, content: "Great Post" };

function postForComment(posts, comments) {
  return posts.find((post) => post.id === comments.postId);
}

console.log(postForComment(posts, comments));


//////////////////////////////
// THE EVERY AND SOME HELPER
let computers = [
  { name: "Apple", ram: 24 },
  { name: "compaq", ram: 4 },
  { name: "Acer", ram: 32 },
];

let allComputersCanRunProgram = computers.every(
  (computer) => computer.ram > 16
);
let onlySomwComputersCanRunProgram = computers.some(
  (computer) => computer.ram > 16
);

// console.log(allComputersCanRunProgram);
// console.log(onlySomwComputersCanRunProgram);
//////////////
let names = ["Alexandria", "Joe", "Matthew"];

names.every((name) => name.length > 4); //false
names.some((name) => name.length > 4); //true

/////////////// i added the height property just for testing
function field1(value1, height1) {
  (this.value = value1), (this.height = height1);
}

field1.prototype.validate = function () {
  return this.value.length > 0;
};

let username = new field1("2cool", 7);
let password = new field1("my_password", 5);
let birthdate = new field1("10/10/2010", 1);

// console.log(username.validate() && password.validate());   instead of adding another an to validate the birthdate,we could use every
let fields = [username, password, birthdate];
console.log(fields);
let isFormValid = fields.every((field) => field.validate);
console.log(isFormValid);
console.log(isFormValid ? 1 : 0);

//////////////////////////////
// THE REDUCE HELPER

let numbers = [10, 20, 30];
let summation = numbers.reduce(function (sum, number) {
  return (sum += number);
}, 0); //is the iniatial value of sum,every itaration form updates sum
console.log(summation);
////////////////////
let primaryColors = [{ color: "red" }, { color: "yellow" }, { color: "pink" }];

let newArr = primaryColors.reduce(function (newArr, primaryColor) {
  newArr.push(primaryColor.color);
  return newArr;
}, []);

console.log(newArr);
//////////////////////////
// interview question
function balancedParens(String) {
  return !String.split("").reduce(function (previous, char) {
    if (previous < 0) {
      return previous;
    }
    if (char === "(") {
      return ++previous;
    }
    if (char === ")") {
      return --previous;
    }
    return previous;
  }, 0);
}

console.log(balancedParens(")("));//when the first paran is ) we will hv -1 then the 2nd paran will add 1 to mk it zero wc returns false

var desks = [
  { type: "sitting" },
  { type: "standing" },
  { type: "sitting" },
  { type: "sitting" },
  { type: "standing" },
];

var deskTypes = desks.reduce(
  function (obj, desk) {
    if (desk.type === "sitting") {
      obj.sitting++;
    } else {
      obj.standing++;
    }

    return obj;
  },
  { sitting: 0, standing: 0 }
);
////returns '{ sitting: 3, standing: 2 }'
//////////////////////////////
// a function to remove all the duplicate values from an array
var numbers = [1, 1, 2, 3, 4, 4];

function unique(array) {
  return array.reduce(function (acc, element) {
    var existingElement = acc.find(function (target) {
      //The find() method returns the first element in the provided array that satisfies the provided testing function.
      return target === element;
    });
    
    if (!existingElement) {
      acc.push(element);
    };
    
    return acc;
  }, []);
}

console.log(unique(numbers));
*/


