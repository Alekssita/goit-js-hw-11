import{a as d,S as f,i}from"./assets/vendor-Db2TdIkw.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const p="49718330-58801d0a59045377f458b76fd",m="https://pixabay.com/api/";async function y(s){const o={key:p,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await d.get(m,{params:o})).data}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),g=new f(".gallery a");function h(s){const o=s.map(t=>`
    <li class="gallery-item">
      <a href="${t.largeImageURL}">
        <img src="${t.webformatURL}" alt="${t.tags}" />
      </a>
      <div class="info">
        <p><b>Likes:</b> ${t.likes}</p>
        <p><b>Views:</b> ${t.views}</p>
        <p><b>Comments:</b> ${t.comments}</p>
        <p><b>Downloads:</b> ${t.downloads}</p>
      </div>
    </li>
  `).join("");c.insertAdjacentHTML("beforeend",o),g.refresh()}function b(){c.innerHTML=""}function L(){l.classList.add("visible")}function w(){l.classList.remove("visible")}const u=document.querySelector(".form"),v=u.elements["search-text"];u.addEventListener("submit",async s=>{s.preventDefault();const o=v.value.trim();if(!o){i.warning({message:"Please enter a search term",position:"topRight"});return}L(),b();try{const n=(await y(o)).hits;if(n.length===0){i.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}h(n)}catch(t){i.error({message:"Something went wrong. Please try again later.",position:"topRight"}),console.error(t)}finally{w()}});
//# sourceMappingURL=index.js.map
