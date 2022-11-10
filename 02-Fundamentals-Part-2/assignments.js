function describeCountryname(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const a = describeCountryname('Cameroon', 20, "Yaounde");
const b = describeCountryname("Nigeria", 50, "Abuja");
const c = describeCountryname("South-Africa", 30, "CapeTown");

console.log(a);
console.log(b);
console.log(c);


function percentageOfWorld1(givenPop) {
  return (givenPop / 7900) * 100;
}
const pop1 = percentageOfWorld1(20);
const pop2 = percentageOfWorld1(50);
const pop3 = percentageOfWorld1(13);
console.log(pop1, pop2, pop3);

const percentageOfWorld2 = function (givenPop) {
  return (givenPop / 7900) * 100;
};
const popa = percentageOfWorld1(20);
const popb = percentageOfWorld1(50);
const popc = percentageOfWorld1(13);
console.log(pop1, pop2, pop3);

const percentageOfWorld3 = (givenPop) => (givenPop / 7900) * 100;
const popx = percentageOfWorld1(20);
const popy = percentageOfWorld1(50);
const popz = percentageOfWorld1(13);
console.log(pop1, pop2, pop3);
