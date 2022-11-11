'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  //ES6 enhanced objects literals
  openingHours,
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery({
    time = '20:00',
    address = 'home',
    mainIndex = 0,
    starterIndex = 1,
  }) {
    console.log(
      `Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your Delicious pasta with ${ing1},${ing2},${ing3}`);
  },
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient, otherIngredients);
  },
};
// console.log(restaurant);

/*
// SPLIT AND JOIN
console.log('a+very+nice+string'.split('+'));
console.log('Jonas Benson'.split(' '));

const [firstName, lastName] = 'Jonas Benson'.split(' ');
console.log(firstName, lastName);

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  console.log(names);
  const namesUpper = [];

  for (const n of names) {
    //n represents each element in the arrayr
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));  OR
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('jessica ann smith john');
capitalizeName('pablo escober da vinci');

// PADDING
const message = 'Go to gate 23!';
console.log(message.padStart(25, '+').padEnd(35, '-'));
console.log(message.padEnd(25, '-'));

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);

  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(5494961));
console.log(maskCreditCard(5494961564984));
console.log(maskCreditCard('2151616161161616516161716'));


//repeat
const message2 = 'Bad weather... All departures Delayed...';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`there are ${n} planes in line ${'🛫'.repeat(n)}` );
}

planesInLine(5);
planesInLine(2);
planesInLine(10);
*/

/*
const airline = 'TAP Air Portugal';

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());
// console.log('jonas'.toUpperCase());

// Fix Capitalisation in name
const passenger = 'jOnAS' //Jonas
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

//COMPARING EMIALS
const email = 'hello@jonas.io';
const loginEmail = ' Hello@Jonas.io \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

//replacing
const priceGB = '288,97£'
const priceUS = priceGB.replace('£', '$').replace(',','.');
console.log(priceUS);

const announcement = 'All passengers come to boarding door 23.Bourding door 23!';
console.log(announcement.replace('door','gate'));
console.log(announcement.replaceAll('door','gate'));
// console.log(announcement.replace(/door/g, 'gate'));

//BOOLEAN
const plane = 'Airbus A320neo';
console.log(plane.includes('Airbus'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Airb'));

if (plane.includes('Airbus') && plane.endsWith('neo')) {
  console.log('part of the New Airbus Family');
}

// Practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();

if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome aboard!');
  }
};

checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');
*/

/*
//WORKING WITH STRINGS PART 1

const airline = 'camair.cor hop';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('cor'));

console.log(airline.slice(4));
console.log(airline.slice(4,7));

console.log(airline.slice(0,airline.indexOf(' ')));//first word
console.log(airline.slice(airline.lastIndexOf(' ') + 1));//last word

console.log(airline.slice(-2));
console.log(airline.slice(1,-2));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seat 😬');
  else console.log('You got lucky 😎');
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('jonas'));
console.log(typeof new String('jonas'));

console.log(typeof new String('jonas').slice(1));
// console.log(airline.slice(airline.lastIndexOf()));select last letter
// const 
*/

////////////////////////////////
/*
//LOOPING ARRAYS
const menu = [ ...restaurant.starterMenu, ...restaurant.mainMenu ];

for (const item of menu) console.log(item);

for (const [i,el] of menu.entries()) console.log(`${i+1}:${el}`);

*/

/*
//destructuring arrays
//1)spread and rest

// SPREAD ,because on right side of =
const arr = [1, 2, ...[3, 4,]];

// REST, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5,6];//...others creates another array for the remaining items
console.log(a, b, others);

const [Pizza, , Risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(Pizza, Risotto, otherFood);

// OBJECTS.............//set sat to funday and then ...weekdays collect the rest of of the objects in openinghours
const { sat: funday, ...weekday } = restaurant.openingHours;
console.log(weekdays);
// console.log({ sat: funday, ...weekday });

//2)functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushroom','onion','olives','spinach')
restaurant.orderPizza('mushroom')

*/

/*

///////////////////////////////////////
// The Spread Operator (...)

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);
console.log(1, 2, 7, 8, 9);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Iterables: arrays, strings, maps, sets.but NOT objects
const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters);
console.log(...str);
// console.log(`${...str} Schmedtmann`);//does not work

// Real-world example
const ingredients = [
  // prompt("Let's make pasta! Ingredient 1?"),
  // prompt('Ingredient 2?'),
  // prompt('Ingredient 3'),
];
console.log(ingredients);

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);//more advicable to use

// Objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);

///////////////////////////////////////
// Destructuring Objects
restaurant.orderDelivery(
  {
    time: '22:33',
    address: 'via del sole,21',
    mainIndex: 2,
    starterIndex:2,
}
)

restaurant.orderDelivery(
  {
  address: 'via del sole,21',
  starterIndex: 1,
}
)

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

//COLLECTING AND ASSIGNING NEW NAMES TO OBJECT METHODS
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

//DEFAULT VARIABLES
const { Mmenu = [], starterMenu: starter = [] } = restaurant;
console.log(Mmenu, starter);

//MUTATING VARIABLES
let a = 111;
let b = 999;
const obj = {
  a: 23,
  b: 7,
  c: 14,
};
({ a, b } = obj);
console.log(a, b);

//NESTED OBJECTS
const {
  fri: { open:o=[], close:c=[]}
} = openingHours;
console.log(o,c);



////////////////////////////
// DESTRUCTURING ARRAYS
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

//SWITCHING VARIABLES
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

//SWITCHING VARIABLES BEST PRACTICE
[main, secondary] = [secondary, main];
console.log(main, secondary);

// RECIEVE TWO RETURN VALUES FROM A FUNCTION
const[starter,mainCourse]= restaurant.order(2, 0);
console.log(starter, mainCourse);

// NESTED DESTRUCTURING
const nested = [2, 4,[5, 6]];
// const [i, , j] = nested;
const [i, ,[j,k]] = nested;
console.log(i, j, k);

// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
*/
