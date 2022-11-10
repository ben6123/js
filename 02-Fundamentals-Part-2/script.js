"use strict";

/*
 // Activating Strict Mode
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

// const interface = 'Audio';
// const private = 534;
*/

/*
function logger() {
  console.log('my name is Jonas');
}
//calling the fxn,running,invoking 
logger();
logger();
logger();

function fruitProcessor(apples,oranges) {
  const juice = `juice with ${apples} apples and ${oranges} oranges.`;
  return juice
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');
*/

/*
//function declarations
const age1 = calcAge1(1991)

function calcAge1(birthYear) {
  return 2037-birthyear
} 

//function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
}
const age2 = calcAge2(1991);

console.log(age1,age2);
*/

/*
//arrow fxn
const calcAge3 = birthYeah => 2037 - birthYeah;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYeah, firstName) => {
  const age = 2037 - birthYeah;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1980, "Bob"));
*/

/*
function cutFruitPieces(fruit) {
  return fruit * 3;
}

function fruitProcessor(apples, oranges) {
  const applepieces = cutFruitPieces(apples);
  const orangepieces = cutFruitPieces(oranges);

  const juice = `juice with ${applepieces} pieces of apple and ${orangepieces} pieces of orange.`;
  return juice;
}
console.log(fruitProcessor(2,3))
*/

/*
// Reviewing Functions
const calcAge = function (birthYeah) {
  return 2037 - birthYeah;
}

const yearsUntilRetirement = function (birthYeah, firstName) {
  const age = calcAge(birthYeah);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired 🎉`);
    return -1;
  }
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1950, 'Mike'));
*/

/*
// challenge 1
const calcAverage = (avg1, avg2, avg3) => (avg1 + avg2 + avg3) / 3;
console.log(calcAverage(6, 5, 4));
// test 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    return `Dolhins win (${avgDolphins} vs. ${avgKoalas})`;
  } else if (avgDolphins * 2 <= avgKoalas) {
    return `Koalas win (${avgKoalas} vs. ${avgDolphins})`;
  } else {
    return `no team wins...`;
  }
};

console.log(checkWinner(scoreDolphins, scoreKoalas));

checkWinner(576, 111);

// test 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);

console.log(checkWinner(scoreDolphins, scoreKoalas));
*/

/*
const friend1 = 'micheal';
const friend2 = 'Ben';
const friend3 = 'Richard';

const friends = ['micheal', 'Ben', 'Richard'];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2]='jay'
console.log(friends);
// friends =['bob','alicia']  cannot change entire array

const firstName = "Jonas";
const jonas = [firstName, "Schmedtmann", 2037 - 1991, "teacher", friends];
console.log(jonas);
console.log(jonas.length);

// Exercise
const calcAge = function (birthYeah) {
  return 2037 - birthYeah;
}

const years = [1990, 1996, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);
*/

/*
const friends = ["micheal", "Ben", "Richard"];
// add elements
const newLength= friends.push('jay');//last
console.log(friends);//returns length
console.log(newLength);

friends.unshift('john');
console.log(friends);
// remove elements
friends.pop();//last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // First
console.log(friends);

console.log(friends.indexOf("Ben"));
console.log(friends.indexOf("Bob"));

friends.push(23);
console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));
console.log(friends.includes(23));

if (friends.includes('steven')){
  console.log('You have a friend called Steven');
}
*/

/*
// challenge 2

// const calcTip=function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }
// OR
const calcTip = (bill) =>
  bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(bills,tips);

const totals = [
  bills[0] + calcTip(bills[0]),
  bills[1] + calcTip(bills[1]),
  bills[2] + calcTip(bills[2]),
];
console.log(totals);
*/

/*
Introduction to Objects
const jonasArray = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven']
];

const jonasObject = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven']
};
*/

/*
// Dot vs. Bracket Notation
const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven']
};
console.log(jonas);

console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

// console.log(jonas.'last' + nameKey) does nt work

const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
}

jonas.location = 'portugal';
jonas['twiter'] = '@jonasschmedtman';
console.log(jonas);

 //challenge
//  "Jonas has 3 friends, and his best friend is called Michael";

console.log(`${jonas.firstName} has ${jonas.friends.length} friends,and his best friend is called ${jonas.friends[0]}`);
*/

/*
const jonas = {
  firstName: "jonas",
  lastName: "ben",
  birthYear: 1991,
  job: "teacher",
  friends: ["Micheal", "Pablo", "Steven"],
  hasDriversLicense: false,

  // calcAge: function (birthYeah) {
  //     return 2037 -birthYear;
  //   }

  // calcAge: function () {
  //   // console.log(this);   logs the object
  //   return 2037 - this.birthYear;
  // }

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      this.job
    }, and he ${
      this.hasDriversLicense ? 'has' : "has not"
    } got a driver's license`;
  },
};
// the this keyword is guided by the name of the function in the fucntion call
// console.log(jonas['calcAge'](1991));
console.log(jonas.calcAge());

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

// challenge
// "Jonas is a 46-year old teacher, and he has a driver's license"
console.log(jonas.getSummary());
*/

/*
//challenge 3
const mark={
  name: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI:function() {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  }
}

const john = {
  name: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI
  },
};

mark.calcBMI();
john.calcBMI();
console.log(mark.BMI,john.BMI);

console.log(
  `${mark.BMI > john.BMI ? mark.name : john.name}'s BMI ${
    mark.BMI > john.BMI ? mark.BMI : john.BMI
  } is higher than ${mark.BMI > john.BMI ? john.name : mark.name}'s ${
    mark.BMI > john.BMI ? john.BMI : mark.BMI
  }`
);
*/

/*
// Iteration: The for Loop

// console.log('Lifting weights repetition 1 ⚓');
// console.log('Lifting weights repetition 2 ⚓');
// console.log('Lifting weights repetition 3 ⚓');
// console.log('Lifting weights repetition 4 ⚓');
// console.log('Lifting weights repetition 5 ⚓');
// console.log('Lifting weights repetition 6 ⚓');
// console.log('Lifting weights repetition 7 ⚓');
// console.log('Lifting weights repetition 8 ⚓');
// console.log('Lifting weights repetition 9 ⚓');
// console.log('Lifting weights repetition 10 ⚓');

// for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 20; rep++) {
  console.log(`Lifting weights repetition ${rep} ⚓`);
}
*/

/*
// Looping Arrays, Breaking and Continuing
const jonas = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
  true
];

const types=[]


// console.log(jonas[0])
// console.log(jonas[1])
// ...
// console.log(jonas[4])
// jonas[5] does NOT exist

for (let i = 0; i < jonas.length; i++){
  // reading array elts
  console.log(jonas[i], typeof jonas[i]);

  // filling array items
  // types[i] = typeof jonas[i];
  // OR
  types.push(typeof jonas[i])
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i= 0; i< years.length;i++) {
  ages.push(2037-years[i]);
}
console.log(ages);

// continue 
console.log('--- ONLY STRINGS ---')
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== 'string') continue;

  console.log(jonas[i], typeof jonas[i]);
}

// break
console.log('--- Breaks when it meets a number ---')
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== 'string') continue;

  console.log(jonas[i], typeof jonas[i]);
}

*/

/*

//  Looping Backwards and Loops in Loops
const jonas = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
  true
];

// 0, 1, ..., 4
// 4, 3, ..., 0

for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(i, jonas[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`-------- Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♀️`);
  }
}

// The while Loop

for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}

let rep = 1;
while (rep <= 10) {
  // console.log(`WHILE: Lifting weights repetition ${rep} 🏋️‍♀️`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log('Loop is about to end...');
}
*/


/*
// cahllenge 4
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}
console.log(bills, tips);
console.log(totals);

// bonus
const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  // console.log(sum);
  return sum / arr.length;

};
console.log(calcAverage(tips));
console.log(calcAverage(totals))
*/