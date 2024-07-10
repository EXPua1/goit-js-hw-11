import{S as p,i as f}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&e(a)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function e(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();const m="44853221-20be0a035158c611166c29677",h="https://pixabay.com/api/";function y(n){const r=encodeURIComponent(n),s=`${h}?key=${m}&q=${r}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(s).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}let g=new p(".gallery a",{captionsData:"alt",captionDelay:250,close:!0,nav:!0});function L(n){const r=document.querySelector(".gallery");r.innerHTML="";const s=n.map(e=>`
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
  `).join("");r.insertAdjacentHTML("beforeend",s),g.refresh()}const v=document.getElementById("searchForm"),c=document.getElementById("searchInput"),u=document.querySelector(".gallery");let i=!1;v.addEventListener("submit",n=>{if(n.preventDefault(),!i){if(b(),c.value.trim()===""){f.info({title:"Внимание",message:"Введите текст для поиска изображений",position:"topRight"}),l();return}i=!0,setTimeout(()=>{y(c.value.trim()).then(r=>{r.hits.length===0?(u.innerHTML="",d()):(L(r.hits),c.value=""),l(),i=!1}).catch(r=>{console.error("Ошибка при выполнении поискового запроса:",r),d(),l(),i=!1})},1e3)}});const d=()=>{f.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})};function b(){u.insertAdjacentHTML("afterbegin",'<div class="loader">Loading...</div>')}function l(){const n=u.querySelector(".loader");n&&n.parentNode.removeChild(n)}
//# sourceMappingURL=commonHelpers.js.map
