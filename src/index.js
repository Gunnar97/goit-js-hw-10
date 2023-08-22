import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';
import { fetchBreeds } from './cat-api.js';
import { fetchCatByBreed } from './cat-api.js'
const refs = {
    single: document.querySelector('.breed-select'),
    loader: document.querySelector('.loader'),
    cat: document.querySelector('.cat-info'),
    error: document.querySelector('.error')
}


refs.single.classList.add('ishidden');
refs.error.classList.add('ishidden');
fetchBreeds().then(data => {
    
    renderList(data)
    refs.loader.classList.add('ishidden')
});


function renderList(arr) {
  const listBreeds = arr.map(breed => `<option  value="${breed.id}"><span>${breed.name}</span></option>`).join('');
    refs.single.innerHTML = listBreeds;
    new SlimSelect({
    select: refs.single,
})
};


refs.single.addEventListener('change', onChange);

function onChange(eve) {
    refs.cat.innerHTML = '';
     refs.loader.classList.remove('ishidden')
    const selectedBreedId = eve.target.value;
    fetchCatByBreed(selectedBreedId).then(data => {
        renderCat(data);
        refs.loader.classList.add('ishidden')
    })
}

function renderCat(arr) {
  const catByBreeds = arr.map(breed => `<img src="${breed.url
      }" alt="${breed.breeds[0].name}" width="600px">
<div class="info"><h2>${breed.breeds[0].name}</h2>
    <p class="description">${breed.breeds[0].description}</p>
    <p><span class="temperament">Temperament:</span> ${breed.breeds[0].temperament}</p></div>
    `).join('');
    refs.cat.innerHTML = catByBreeds;
};

