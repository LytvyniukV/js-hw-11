(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const i={searchForm:document.querySelector(".search-form"),searchInput:document.querySelector(".search-input"),gallery:document.querySelector(".gallery")},l=()=>{const n=new URLSearchParams({key:"41495640-29bfe7f4b7a68b8700cb52105",image_type:"photo",orientation:"horizontal",safesearch:!0,q:i.searchInput.value});return fetch(`https://pixabay.com/api/?${n}`).then(r=>{if(r.ok)return r.json();throw new Error("Request is not ok")})},a=({hits:n})=>n.reduce((r,o)=>r+`
    <li class='gallery-item'>
        <a href="${o.largeImageURL}">
        <img src="${o.webformatURL}" alt="${o.tags}" width='640' height='640'/>
        </a>
        <div class='info-wrap'>
          <div>
            <h3>Likes</h3>
            <p>${o.likes}</p>
          </div>
          <div>
            <h3>Views</h3>
            <p>${o.views}</p>
          </div>
          <div>
            <h3>Comments</h3>
            <p>${o.comments}</p>
          </div>
          <div>
            <h3>Downloads</h3>
            <p>${o.downloads}</p>
          </div>
        </div>
      </li>`,""),u=n=>{n.preventDefault(),l().then(r=>{i.gallery.innerHTML=a(r),console.log(r)}).catch(r=>console.log(r))};i.searchForm.addEventListener("submit",u);
//# sourceMappingURL=commonHelpers.js.map
