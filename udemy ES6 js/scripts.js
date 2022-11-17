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


///////////////////////////////
// ENHANCED OBJECTS LITERALS
function createBookShop(inventory) {
  return {
    inventory,
    inventoryValue() {
      return this.inventory.reduce((total, book) => total + book.price, 0);
    },
    priceForTittle(title) {
      return this.inventory.find((book) => book.title === title).price;
    },
  };
}

const inventory = [
  { title: "Harry Potter", price: 10 },
  { title: "Rich Dad ,Poor Dad", price: 15 },
];

const BookShop = createBookShop(inventory);
console.log(BookShop);
console.log(BookShop.inventoryValue());
console.log(BookShop.priceForTittle("Harry Potter"));



/////////////////////////////
// DEFAULT FUNCTION ARGUMENTS
function User(id) {
  // takes an id and assigns it to a new user
  this.id = id;
}

function genarateId() {
  //generates a random id number
  return Math.random() * 99999999;
}

function createAdminUser(user = new User(genarateId())) {
  // generates an id ,assigns it to a new user and makes the user an admin
  user.admin = true;

  return user;
}
createAdminUser()//calling this creates a new user and makes him an admin

// creating a new user and making him an admin
const user = new User(genarateId());//
createAdminUser(user);


/////////////////////////////
// rest and spread

function addNumber(...numbers) {
  return numbers.reduce((sum, number) => sum + number,0);
}

console.log(addNumber(1, 2, 5, 4, 8, 2, 4, 20)); //results 46
////////////////////////
const defaultColors = ['red', 'pink'];
const favouriteColors = ['yellow', 'black'];
const fallColors=['brown','violet','purple']

console.log(['blue', ...defaultColors, 'green', ...favouriteColors, ...fallColors]); //creates a new array by joining all the ...arrays
///////////////////////////
function validateShoppingList(...items) {
  if (items.indexOf("milk") < 0) {
    return ["milk", ...items];
  }
  return items;
}
console.log(validateShoppingList('oranges','mangoes','eggs')); 

const mathLibrary = {
  calculateProduct(...rest) {
    return this.multiply(...rest)
  },
  multiply(a,b) {
    return a * b;
  }
}

console.log(mathLibrary.calculateProduct(2,4));


//////////////////////////////////
// DESTRUCTURING
//  helps unpack values from arrays, or properties from objects,
//  into distinct variables.
let savedFile = {
  extension: '.jpeg',
  name: 'repost',
  size:14040
}

function fileSummary({extension,name,size},{color}) {
  return `The ${color} file ${name}${extension} is of size ${size}`
}

console.log(fileSummary(savedFile,{color:'pink'})); 
///////////////////////////////

const companies1 = ['google', 'facebook', 'whatsapp', 'ayoba']

const [name1, name2, ...names] = companies1;
// name1 could hv been `const firstCompany=companies[0]; 

console.log(name1);
console.log(names);
//////////////////////////////
// objects in Array
const companies2 = [
  {name:'google',location1:'Mountain View'},
  {name:'facebook',location1:'Menlo park'},
  {name:'Uber',location1:'San Francisco'}
];

const [{location1}] = companies2;
console.log(location1);
/////////////////////////
// arrays in objects
const google = {
  location5:['mountain view','new york','london'],
  location6:['mountain view','new york','london']
}

const { location5: [MV] } = google;
console.log(MV);
///////////////////

function signup({ name, dob, password, sex, city }) {
  //////////with destructuring you dont have to master the order of a list of long parameters
  // destructuring can be used in funtion parameters(arguments)
  return 'hey'
};

const user = {
  name: 'Ben',
  dob: '01/01/2022',
  password: 'dfadf446546',
  sex: 'M',
  city:'yde'
}

console.log(signup(user));
///////////////////////////
const points = [[4, 5], [10, 1], [0, 40]];

const cor = points.map(([x, y]) => {
  return { x, y }
})
console.log(cor);
//////////////////////////////
const profile = {
  title: "Engineer",
  department: "Engineering",
};

function isEngineer({ title, department }) {
  return title === "Engineer" && department === "Engineering";
}
isEngineer(profile);
//////////////////////////////////

const classes = [
  ["Chemistry", "9AM", "Mr. Darnick"],
  ["Physics", "10:15AM", "Mrs. Lithun"],
  ["Math", "11:30AM", "Mrs. Vitalis"],
];

const classesAsObject = classes.map(([Subject, Time, Teacher]) => {
  return {Subject,Time,Teacher}
});
console.log(classesAsObject);


////////////////////////////////
// Object Oriented Programming

class Car {
  constructor({ title }) {
    this.title = title;
  }

  drive() {
    //drive is a method
    return "vroom";
  }
}
// creates a new instance of Car
const car = new Car({ title: "Toyota" }); //when we call the Car class,the constructor takes effect and create the class
// console.log(car);
console.log(car.drive());

class Toyota extends Car {
  //extends gives Toyota access to all methods in Car
  constructor(options) {
    //we cant destructure when using the super clas
    super(options); //calls car.constructor
    this.color = options.color;
  }
  honk() {
    return "peeep";
  }
}
const toyota = new Toyota({ color: "red", title: "daily driven" });
// console.log(toyota);
console.log(toyota.honk());
console.log(toyota.drive());
/////////////////////////////////////////
class Monster {
  constructor(options) {
    this.health = 100;
    this.name = options.name;
  }
}

class Snake extends Monster {
  constructor() {
    super();
  }
  
  bite(deduct) {
    return (deduct.health -= 10);
  }
}
const M = new Monster({ name: "p" });
const S = new Snake();

console.log(Snake.bite());

/////////////////////////////////////////
// Generators

function* shopping() {
  // stuff on the side Walk
  // walking down the sidewalk
  // go into the store with cash
  const stuffFromStore = yield 'cash';
  
  const cleanClothes = yield 'laundry';
  // walk back home
  return [stuffFromStore,cleanClothes];
}
// console.log(shopping());

// stuff in the store
const gen = shopping();

console.log(gen.next());//leaving our house
// walked into store
// walking up and down the aisles...
// purchase our stuff
console.log(gen.next('groceries'));//leaving the store with groceries

// console.log(gen.next());
console.log(gen.next('stuffFromStore'));
////////////////////////////////////////////////
function* colors() {
  yield 'red';
  yield 'blue';
  yield 'green';
}
// const gen1 = colors();
// console.log(gen1.next());//enters fxn,stops at red
// console.log(gen1.next());//enters at red stops at blue
// console.log(gen1.next());//enters at blue stops at green
// console.log(gen1.next());//enters at green,stops,//there is no return value

const myColors = [];
for (let color of colors()) {
  myColors.push(color)
}

console.log(myColors);
const testingTeam = {
  lead: "Amanda",
  tester: "bill",
  //[Symbol.iterator]... this teaches a for of loop how to loop over this object
  [Symbol.iterator]: function* () {
    yield this.lead;
    yield this.tester;
  },
};

const engineeringTeam = {
  testingTeam,
  size: 3,
  department: 'Engineering',
  lead: 'Jill',
  manager: 'Alex',
  engineer: 'Dave',
  [Symbol.iterator]: function* () {
    yield this.lead;
    yield this.manager;
    yield this.engineer;
    yield* this.testingTeam;
  }
};

let names = [];
for (let name of engineeringTeam) {
  names.push(name)
}
console.log(names);

class comment{
  constructor(content,children) {
    this.content=content;
    this.children = children;
  }
// uses the syntax of a method in a class
  *[Symbol.iterator]() {
    yield this.content;
    for (let child of this.children) {
      yield* child
    }
  }
}
// creating the children comments
const children = [
  new comment('good comment', []),
  new comment('bad comment', []),
  new comment('meh', []),
];
// creating the parent comment and calling the children;
const tree = new comment('Great post', children);

const values = [];
for (let value of tree) {
  values.push(value);
}
console.log(values);
*/
/*
///////////////////////////////////
// PROMISES

let promise = new Promise((resolve,reject)=> {
  var request = new XMLHttpRequest();
  // make request
  request.onload = () => { 
    resolve()
  };

  // setTimeout(() => {
  //   resolve()
  //   // reject()
  // },3000)
})
console.log(promise);  

promise
  .then(() => { console.log('p'); })
  .catch(() => { console.log('f'); });
  ////////////////////////AJAX REQUEST AND FETCH
  
  let url = "https://jsonplaceholder.typicode.com/posts/" ;
  // fetch(url)
  //   .then(response => response.json())
  //   .then(data=>console.log(data))
  
  fetch(url)
  .then((response) => console.log(response))
  .catch(error => console.log('BAD',error));
  
  */



