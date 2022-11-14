'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className) {
  /////loops thru languages and returns the name value in each langauge
  const langs = data?.languages?.map(function (mov, index, arr) {
    return mov.name;
  });
  /////////////////////////////////////////////////////////////
  console.log(data);
  // console.log(data);
  console.log(data?.flag);
  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row">
        <span>👫</span>${(+data?.population / 1000000).toFixed(1)} Million people
      </p>
      <p class="country__row">
        <span>🧏‍♂️</span>${langs}
      </p>
      <p class="country__row">
        <span>💰</span>${data.currencies[0]?.name}
      </p>
    </div>
  </article>
`;
  // console.log(data.flag);
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};
/*
// ////////////////////////
// our first ajax call

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
    const [data] = JSON.parse(this.responseText); //OR
    // const data = JSON.parse(this.responseText)[0];

    // console.log(this.responseText);
    console.log(data);
  
    /////loops thru languages and returns the name value in each langauge
     const titles = data.languages.map(function (mov, index, arr) {
      //  console.log(mov);
       return mov.name;
     });
    console.log(titles);

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
          <span>🧏‍♂️</span>${titles}
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
// getCountryData('china')
// getCountryData('usa')
// getCountryData('Rusia')
*/


/*
////////////////////////////////
// WELCOME TO CALLBACK HELL{GET COUNTRY AND NEIGHNOUR}


//Ajax call country 1
const getCountryAndNeighbour = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v2/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    console.log(JSON.parse(this.responseText));
    const [data] = JSON.parse(this.responseText); //OR
    // const data = JSON.parse(this.responseText)[0];
    console.log(data);

    // console.log(this.responseText);
    // the 'this' property points to request
    //the json came as an array with one object at index 0
    //deconstructuring it leaves us with an onject wc was at index 0
    // we put 'data' in [] so we can destructure json and store in data
    //parse treats json text as js syntax


    //Render country 1
    renderCountry(data);

    //get neighbour country
    const neighbour = data.borders?.[0]; //if there are many borders this selects 1,if not `const neighbour = data.borders;` would hv been ok
    if (!neighbour) return; //return here stops the fxn

    //Ajax call country 2
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener('load', function () {
      const data2 = JSON.parse(this.responseText);
      console.log(data2);

      renderCountry(data2, 'neighbour');
    });
  });
};
// get country and neighbour
getCountryAndNeighbour('chad');
*/


/////////////////////////////////////
// CONSUMING PROMISES

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(function (response) {
//     console.log(response);
//     return response.json();
//   })
//     .then(function (data) {
//     console.log(data);
//     renderCountry(data[0]);
//   });
// };

////////////////////////////
// CHAINING PROMISES
const getCountryData = function (country) {
  // fetch country 1
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then(response => {
      
      return response.json();
    })
    .then(data => {
      renderCountry(data[0]);
      // console.log(data[0].borders);
      const neighbour = data[0].borders?.[0];
      console.log(data[0]);

      // if (!neighbour) return; optional chaining above takes care of this
      // fetch country 2
      return fetch(
        `https://restcountries.com/v2/alpha/${neighbour}`
      )
    }).then(response1 => {
      return response1.json();
    })
    .then(data => renderCountry(data, 'neighbour'))
    //response in this case is the return value of the function before .then
};
// getCountryData('cameroon');
getCountryData('italy');
// getCountryData('ghana');

/////////////////////////////////////
// HANDLING REJECTED PROMISES 





