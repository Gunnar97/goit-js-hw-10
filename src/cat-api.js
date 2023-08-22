const BASE_URL = 'https://api.thecatapi.com';
const END_POINT = '/v1/breeds/';
const API_KEY = 'live_ohr4TroEeALFAeX9AwVTyht5ME5G5GQHIqILsL5OUq5KibI4yr7Dg55ykvZJ2zYe';

function fetchBreeds() {

  const url = `${BASE_URL}${END_POINT}`;
 return fetch(url,{headers: {
      'x-api-key': API_KEY
    }}).then(res => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error('Error');
    }
    })
};





  


