
import { searchImages } from './js/pixebay-api';
const search = document.querySelector('.search')
const searchBtn = document.querySelector('.search button')
const input = document.querySelector('.search input')


searchBtn.addEventListener('click', () => {
 
   searchImages(input.value)
   input.value =""
})