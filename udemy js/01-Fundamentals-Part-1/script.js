/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log('Jonas');
console.log(23);

let firstName = "Jonas";

console.log(firstName);
console.log(firstName);
console.log(firstName);

let jonas_matilda = "JM";
let $function = 27;

let person = 'jonas';
let PI = 3.1415;

let myFirstJob = 'Coder';
let myCurrentJob = "teacher"

let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob)
*/

/*
let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof "jonas");

javascriptIsFun = 'YES';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year)

year = 1991;
console.log(typeof null)
*/

/*
let age = 30;
age = 31;

constbirthYear = 1991;
//birthYear=1990;
// const job;

var job = 'programmer';
job = 'teacher';

lastName = 'ben';
console.log(lastName);
*/

/*
//maths operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

const firstName = "Jonas";
const lastName = "ben"
console.log(firstName +' '+lastName)

//assignment operators
let x = 10 + 5;//=15
x += 10; // x=x+10=25
x *= 4;  //x=x*4
x++  //x=x+1
x--;
x--;
console.log(x)

//comparison operations
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);
*/

/*
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5;//x=y=10,x=10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);
*/

/*
// challenge 1
// const markMass = 78;
// const markHeight = 1.69;
// const johnMass = 92;
// const johnHeight = 1.95;

const markMass = 95;
const markHeight = 1.88;
const johnMass = 85;
const johnHeight = 1.76;

const mBmi = markMass / markHeight ** 2;
const jBmi = johnMass / johnHeight ** 2;
console.log(mBmi, jBmi);


if (mBmi > jBmi) {
  console.log(`Mark's BMI (${mBmi}) is higher than John's (${jBmi})!`);
} else {
  console.log(`John's BMI (${jBmi}) is higher than Mark's (${mBmi})!`);
}
*/

/*
const firstName = 'Jonas';
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ", a " + (year - birthYear) + ' years old ' + job + '!';
console.log(jonas)

const jonasnew = `I'm  ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasnew);

console.log(`just a regular string`);

console.log(`string with \n\
multiple\n\
lines`);

console.log(`string with 
multiple
lines`);
*/

/*
const age = 15;
if (age >= 18) {
  console.log(`Sarah can start driving licence🚗`);
} else {
  const yearLeft = 18 - age;
  console.log(`Sarah is too young, wait another ${yearLeft} years:)`);
}

const birthYear = 2012;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
*/

/*
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("jonas"));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log("I am " + 23 + " years old");
console.log("23" - "10" - 3);
console.log("23" / 2);

let n = "1" + 1;//'11'
n = n - 1;
console.log(n);//10
*/

//5 falsy values:0,'',undefined,null,NaN

/*
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100;
if (money) {
  console.log("don't spend it all;");
} else {
  console.log("You should get a Job");
}

let height = 0;
if (height) {
  console.log("YAY! Height is defined");
} else {
  console.log("Height is UNDEFINED");
}
*/

/*
const age = "18";
if (age === 18) console.log("you just became an adult :D (strict)");
if (age == 18) console.log("you just became an adult :D (loose)");

const favourite = Number(prompt("input number"));

console.log(favourite);
console.log(typeof favourite);

if (favourite===23) {
  console.log('cool! 23 is an amazimg number!');
}else if (favourite===7) {
  console.log("7 is also a cool number!");
}else if (favourite===9) {
  console.log("9 is also a cool number!");
} else {
  console.log('number is not 23 or 7 or 9');
}

if (favourite!==23) console.log('why not 23?');
*/

/*
const hasDriversLicence = true;//a
const hasGoodVision = true;//b

console.log(hasDriversLicence && hasGoodVision);
console.log(hasDriversLicence || hasGoodVision);
console.log(!hasDriversLicence);

// if (hasDriversLicence && hasGoodVision) {
//   console.log('sarah is able to drive!');
// } else {
//   console.log('someone else should drive....');
// }


const isTired = false;//c
console.log(hasDriversLicence && hasGoodVision && isTired);

if (hasDriversLicence && hasGoodVision && !isTired) {
  console.log("sarah is able to drive!");
} else {
  console.log("someone else should drive....");
}*/

/*
 challenge  3
const dolphinesScore = (96 + 108 + 89) / 3;
const kaolasScore = (88 + 91 + 110) / 3;
console.log(dolphinesScore, kaolasScore);

if (dolphinesScore > kaolasScore) {
  console.log(`The winner is dolphines`);
} else if(dolphinesScore === kaolasScore) {
  console.log(`The game was a tie`);
} else {
  console.log(`The winner is kaolas`);
 
}



// bonus 1 && bonus 2
const dolphinesScore = (97 + 112 + 81) / 3;
const kaolasScore = (109 + 95 + 86) / 3;
console.log(dolphinesScore, kaolasScore);

if (dolphinesScore > kaolasScore && dolphinesScore >= 100) {
  console.log(`The winner is dolphines`);
} else if (kaolasScore < dolphinesScore && kaolasScore >= 100) {
  console.log(`The winner is kaolas`);
} else if (
  dolphinesScore === kaolasScore &&
  kaolasScore >= 100 &&
  dolphinesScore >= 100
) {
  console.log(`The game was a tie,both win`);
} else {
  console.log('no one wins the trophy');
}
*/

/*
const day = "friday";

switch (day) {
  case "monday": //day===monday
    console.log("plan course structure");
    console.log("go to coding meetup");
    break;
  case "tuesday":
    console.log("prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("write code examples");
    break;
  case "friday":
    console.log("record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("enjoy the weekend");
    break;
  default:
    console.log("not a valid day");
  // break;
}

if (day === 'monday') {
  console.log("plan course structure");
  console.log("go to coding meetup");
} else if (day === "tuesday") {
  console.log("prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
  console.log("write code examples");
} else if (day === "friday") {
  console.log("record videos");
}else if (day === "saturday" || day === "sunday") {
  console.log("not a valid day");
}
*/

/*
const age = 23;
// age >= 18
//   ? console.log("i like to drink wine")
//   : console.log("i like to drink water");

const drink = age >= 18 ? "wine" : "water";
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = "wine";
} else {
  drink2 = "water";
}
console.log(drink2);

console.log(`i like to drink ${age >= 18 ? "wine" : "water"}`);
*/

/*
// challenge #4

const bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(
  `the bill was ${bill}, the tip was ${tip}, ant the total value was ${
    bill + tip
  }`
);
*/


