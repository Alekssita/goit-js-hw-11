import{a as f,S as d,i as a}from"./assets/vendor-Db2TdIkw.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const p="49718330-58801d0a59045377f458b76fd",m="https://pixabay.com/api/";async function g(s){const o={key:p,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};try{return(await f.get(m,{params:o})).data}catch(e){throw console.error("Error fetching images:",e),e}}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),h=new d(".gallery a");function y(s){const o=s.map(e=>`
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
  `).join("");c.insertAdjacentHTML("beforeend",o),h.refresh()}function b(){c.innerHTML=""}function L(){l.classList.add("visible")}function w(){l.classList.remove("visible")}const u=document.querySelector(".form"),v=u.elements["search-text"];u.addEventListener("submit",s=>{s.preventDefault();const o=v.value.trim();if(!o){a.warning({message:"Please enter a search term",position:"topRight"});return}L(),b(),g(o).then(e=>{const n=e.hits;if(n.length===0){a.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}y(n)}).catch(e=>{a.error({message:"Something went wrong. Please try again later.",position:"topRight"}),console.error(e)}).finally(()=>{w()})});
//# sourceMappingURL=index.js.map
