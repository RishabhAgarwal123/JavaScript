'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
// const getCountryData = (country) => {
//     const URL = `https://restcountries.eu/rest/v2/alpha/${country}`;
//     const request = new XMLHttpRequest();
//     request.open('GET', URL);
//     request.send();
//     request.addEventListener('load', function () {
//         const [data] = JSON.parse(this.responseText);
//         console.log(data);
//     const html = `
//     <article class="country">
//       <img class="country__img" src="${data.flags[0]}" />
// <div class="country__data">
//   <h3 class="country__name">${data.name.common}</h3>
//   <h4 class="country__region">${data.region}</h4>
//   <p class="country__row"><span>👫</span>${(
//             +data.population / 1000000
//         ).toFixed(1)} people</p>
//   <p class="country__row"><span>🗣️</span>${data.languages.hin}</p>
//   <p class="country__row"><span>💰</span>${data.currencies.INR.name}</p>
// </div>
//     </article>
// `;
//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//     });
// }

// getCountryData('portugal');

// Using fetch api 
// Consuming a Promise
const result = fetch('https://api.first.org/data/v1/countries')
    .then(data => data.json())
    .then(res => console.log(res));
//  json() also returns a promise so again need to call .then method in order to get the value
console.log(result)

