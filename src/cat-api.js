import Notiflix from 'notiflix'; 
const BASE_URL = 'https://api.thecatapi.com';
const END_POINT = '/v1/';
const API_KEY = 'live_ohr4TroEeALFAeX9AwVTyht5ME5G5GQHIqILsL5OUq5KibI4yr7Dg55ykvZJ2zYe';
const url = `${BASE_URL}${END_POINT}breeds/`;
const  loader = document.querySelector('.loader')

export function fetchBreeds() {
 return fetch(url,{headers: {
      'x-api-key': API_KEY
    }}).then(res => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error('Error');
    }
    })  .catch(error => {
       Notiflix.Report.failure (
                'ERROR',
                'Oops! Something went wrong! Try reloading the page!',
         'Okay',);
      loader.classList.add('ishidden');
        });
};


   
export function fetchCatByBreed(id) {

  return fetch(`${BASE_URL}${END_POINT}images/search?breed_ids=${id}`,
    {
      headers: {
      'x-api-key': API_KEY
    }}).then(res => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error('Error');
    }
    }) .catch(error => {
       Notiflix.Report.failure (
                'ERROR',
                'Oops! Something went wrong! Try reloading the page!',
         'Okay',);
      loader.classList.add('ishidden');
        });

};
