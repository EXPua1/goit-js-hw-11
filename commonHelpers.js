import{S as l,i as a}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&e(n)}).observe(document,{childList:!0,subtree:!0});function i(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function e(t){if(t.ep)return;t.ep=!0;const r=i(t);fetch(t.href,r)}})();function u(s){const o=document.querySelector(".gallery");o.innerHTML="";const i=s.map(e=>`
    <div class="card">
      <a href="${e.largeImageURL}" title="${e.tags}">
        <img src="${e.webformatURL}" alt="${e.tags}">
      </a>
      <div class="card-info">
      <ul>
  <li>
    <p>Likes</p>
    <p>${e.likes}</p>
  </li>
  <li>
    <p>Views</p>
    <p>${e.views}</p>
  </li>
  <li>
    <p>Comments</p>
    <p>${e.comments}</p>
  </li>
  <li>
    <p>Downloads</p>
    <p>${e.downloads}</p>
  </li>
</ul>
      </div>
    </div>
  `).join("");o.insertAdjacentHTML("beforeend",i),new l(".gallery a",{captionsData:"alt",captionDelay:250,close:!0,nav:!0})}const p="44853221-20be0a035158c611166c29677",d="https://pixabay.com/api/",f=()=>{a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})};function h(s){const o=encodeURIComponent(s),i=`${d}?key=${p}&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`;fetch(i).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).then(e=>{e.hits.length===0?f():u(e.hits)}).catch(e=>{a.error({title:"Error",message:"Failed to fetch images. Please try again later.",position:"topRight"}),console.error("Error fetching data:",e)})}document.querySelector(".search");const y=document.querySelector(".search button"),c=document.querySelector(".search input");y.addEventListener("click",()=>{if(c.value===""){a.info({title:"Внимание",message:"Введите текст для поиска изображений",position:"topRight"});return}h(c.value),c.value=""});
//# sourceMappingURL=commonHelpers.js.map
