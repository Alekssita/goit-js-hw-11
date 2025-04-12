import{a as p,S as d,i}from"./assets/vendor-Db2TdIkw.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(r){if(r.ep)return;r.ep=!0;const t=e(r);fetch(r.href,t)}})();const m="49718330-58801d0a59045377f458b76fd",y="https://pixabay.com/api/";async function g(s){const o={key:m,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:12};try{return(await p.get(y,{params:o})).data}catch(e){throw console.error("Error fetching images:",e),e}}const l=document.querySelector(".gallery"),u=document.querySelector(".loader"),h=new d(".gallery a");function b(s){const o=s.map(e=>`
    <li class="gallery-item">
      <a href="${e.largeImageURL}">
        <img src="${e.webformatURL}" alt="${e.tags}" />
      </a>
      <div class="info">
        <p><b>Likes:</b> ${e.likes}</p>
        <p><b>Views:</b> ${e.views}</p>
        <p><b>Comments:</b> ${e.comments}</p>
        <p><b>Downloads:</b> ${e.downloads}</p>
      </div>
    </li>
  `).join("");l.insertAdjacentHTML("beforeend",o),h.refresh()}function L(){l.innerHTML=""}function v(){u.classList.add("visible")}function w(){u.classList.remove("visible")}const f=document.querySelector(".form"),c=f.elements["search-text"];f.addEventListener("submit",s=>{s.preventDefault();const o=c.value.trim();if(!o){i.warning({message:"Please enter a search term",position:"topRight"});return}v(),L(),g(o).then(e=>{const n=e.hits;if(n.length===0){i.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}b(n)}).catch(e=>{i.error({message:"Network error. Please try again later.",position:"topRight"}),console.error(e)}).finally(()=>{w(),c.value=""})});
//# sourceMappingURL=index.js.map
