import{i as l,S as c}from"./assets/vendor-46aac873.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const n={searchForm:document.querySelector(".search-form"),searchInput:document.querySelector(".search-input"),gallery:document.querySelector(".gallery")},u=()=>{const s=new URLSearchParams({key:"41495640-29bfe7f4b7a68b8700cb52105",image_type:"photo",orientation:"horizontal",safesearch:!0,q:n.searchInput.value});return fetch(`https://pixabay.com/api/?${s}`).then(r=>{if(r.ok)return r.json();throw new Error("Request is not ok")})},d=({hits:s})=>s.reduce((r,o)=>r+`
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
      </li>`,""),h=()=>{l.error({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"rgb(240, 115, 115)",messageColor:"white",maxWidth:300,position:"topRight",timeout:3e3,progressBar:!1,transitionIn:"bounceInRight",transitionOut:"fadeOutLeft",messageSize:14})},f=new c(".gallery a"),m=s=>{s.preventDefault(),n.gallery.innerHTML="<div class='loader'></div>",u().then(r=>{if(r.hits.length<1){h(),n.gallery.innerHTML="";return}n.gallery.innerHTML=d(r),f.refresh(),console.log(r)}).catch(r=>console.log(r))};n.searchForm.addEventListener("submit",m);
//# sourceMappingURL=commonHelpers.js.map
