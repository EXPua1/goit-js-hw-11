import{S as f,i as u}from"./assets/vendor-8c59ed88.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&e(i)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function e(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();const p="44853221-20be0a035158c611166c29677",h="https://pixabay.com/api/";function y(r){const n=encodeURIComponent(r),s=`${h}?key=${p}&q=${n}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(s).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}let m=new f(".gallery a",{captionsData:"alt",captionDelay:250,close:!0,nav:!0});function g(r){const n=document.querySelector(".gallery");n.innerHTML="";const s=r.map(e=>`
    <div class="card">
      <a href="${e.largeImageURL}" title="${e.tags}">
        <img src="${e.webformatURL}" alt="${e.tags}">
      </a>
      <div class="card-info">
        <p>Likes ${e.likes}</p>
        <p>Views ${e.views}</p>
        <p>Comments ${e.comments}</p>
        <p>Downloads ${e.downloads}</p>
      </div>
    </div>
  `).join("");n.insertAdjacentHTML("beforeend",s),m.refresh()}const L=document.querySelector(".search button"),a=document.querySelector(".search input"),d=document.querySelector(".gallery");L.addEventListener("click",()=>{if(v(),a.value===""){u.info({title:"Внимание",message:"Введите текст для поиска изображений",position:"topRight"}),c();return}setTimeout(()=>{y(a.value).then(r=>{r.hits.length===0?l():g(r.hits),c()}).catch(r=>{console.error("Ошибка при выполнении поискового запроса:",r),l(),c()})},1e3)});const l=()=>{u.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})};function v(){d.insertAdjacentHTML("afterbegin",'<div class="loader">Loading...</div>')}function c(){const r=d.querySelector(".loader");r&&r.parentNode.removeChild(r)}
//# sourceMappingURL=commonHelpers.js.map
