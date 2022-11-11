'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
const getCountryData=function(country){
const request = new XMLHttpRequest();
request.open('GET', `https://restcountries.com/v2/name/${country}`);
request.send();

  request.addEventListener('load', function () {
    // the 'this' property points to request
    //the json came as an array with one object at index 0
    console.log(JSON.parse(this.responseText));
    //deconstructuring it leaves us with an onject wc was at index 0
    // we put 'data' in [] so we can destructure json and store in data
    //parse treats json text as js syntax
    const [data] = JSON.parse(this.responseText);  //OR
    // const data = JSON.parse(this.responseText)[0];  

    // console.log(this.responseText);
    console.log(data);
  // mycode
  console.log(data.languages[0].name);
  console.log(data.languages[1]);
  const [ ...langs] = data.languages;
  // console.log(lang1);
  console.log(langs);
  // console.log(lang2.name);
  // console.log(languages.name);

const [...m] = data['languages'];
console.log(m);

    // let number = Object.values(data.languages[0])
    // console.log(number);
    
  let its = data.languages.length;
  console.log(data.languages.length);

  //  if (data.languages.length>1) {

  //    const lan = function () {
  //             for (const item of data.languages) {
  //             let p=`${item.name}` ;
  //           };
  //    };
  //   }
  //   lan();

  // const movementsUSD = data.languages.map(function () {
  //   let i = 0;
  //   for (i = 0; i < data.languages.length; i++) {
  //      console.log(item.name[i]);
  //     //  return `${}` ;
  //           }
  // })
  
  const html = `
    <article class="country">
      <img class="country__img" src="${data.flag}" />
      <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row">
          <span>👫</span>${(+data.population / 1000000).toFixed(1)} people
        </p>
        <p class="country__row">
          <span>🧏‍♂️</span>${movementsUSD}
        </p>
        <p class="country__row">
          <span>🧏‍♂️</span>${data.name}
        </p>
        <p class="country__row">
          <span>💰</span>${data.currencies[0].name}
        </p>
      </div>
    </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
})
}
getCountryData('cameroon')