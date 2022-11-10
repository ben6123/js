//  1
const country = 'Cameroon';
const continent = 'Africa';
let population = 20;

console.log(country);
console.log(continent);
console.log(population);

//  2
let isIsland = false;
isIsland = true;
let language = 'english';
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

console.log(population / 2);
population++;
console.log(population);
console.log(population > 6);
console.log(population < 33);

// using strings
// const description1 = country + " is in " + continent + ", and its " + population + " million people speak " + language;

// using template literals
const description1 = `${country} is in ${continent}, and its ${population} million people speak ${language} `;
console.log(description1);

if (population > 33) {
  console.log(`${country}'s population is above average`);
} else {
  console.log(`${country}'s population is ${33 - population} bellow average`);
}

console.log('9' - '5'); // -> 4
console.log('19' - '13' + '17'); // -> '617'
console.log('19' - '13' + 17); // -> 23
console.log('123' < 57); // -> false
console.log(5 + 6 + '4' + 9 - 4 - 2); // -> 1143

// const numNeighbours = Number(prompt(
//   "How many neighbour countries does your country have?"
// ));
// if (numNeighbours===1) {
//   console.log(`Only 1 border!`);
//   // document.querySelector('.head').textContent="";
// } else if (numNeighbours > 1) {
//   console.log(`More than 1 border`);
// } else {
//   console.log(`No border`);
// }

if (language === 'English' && population < 50 && !isIsland) {
  console.log(`you should live in ${country} :) `);
} else {
  console.log(`${country} does not meet your criteria :(`);
}

// language = "chinese";
switch (language) {
  case 'chinese':
  case 'mandarin':
    console.log('MOST number of native speakers!');
    break;
  case 'spanish':
    console.log('2nd place in number of native speakers');
    break;
  case 'english':
    console.log('3rd place');
    break;
  case 'hindi':
    console.log('Number 4');
    break;
  case 'chinese':
    console.log('5th most spoken language');
    break;
  default:
    console.log('Great language too :D');
}

// population > 33
//   ? console.log(`${country}'s population is above average`)
//   : console.log(`${country}'s population is below average`);

// CORRECTION
console.log(
  `${country}'s population is ${population > 33 ? 'above' : 'below'} average`
);
