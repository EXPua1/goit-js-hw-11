import{S as p,i as d}from"./assets/vendor-8c59ed88.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&e(a)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function e(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();const h="44853221-20be0a035158c611166c29677",y="https://pixabay.com/api/";function m(r){const n=encodeURIComponent(r),s=`${y}?key=${h}&q=${n}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(s).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}let g=new p(".gallery a",{captionsData:"alt",captionDelay:250,close:!0,nav:!0});function L(r){const n=document.querySelector(".gallery");n.innerHTML="";const s=r.map(e=>`
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
  `).join("");n.insertAdjacentHTML("beforeend",s),g.refresh()}const v=document.querySelector(".search button"),c=document.querySelector(".search input"),f=document.querySelector(".gallery");let i=!1;v.addEventListener("click",()=>{if(!i){if(b(),c.value===""){d.info({title:"Внимание",message:"Введите текст для поиска изображений",position:"topRight"}),l();return}i=!0,setTimeout(()=>{m(c.value).then(r=>{r.hits.length===0?u():(L(r.hits),c.value=""),l(),i=!1}).catch(r=>{console.error("Ошибка при выполнении поискового запроса:",r),u(),l(),i=!1})},1e3)}});const u=()=>{d.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})};function b(){f.insertAdjacentHTML("afterbegin",'<div class="loader">Loading...</div>')}function l(){const r=f.querySelector(".loader");r&&r.parentNode.removeChild(r)}
//# sourceMappingURL=commonHelpers.js.map
