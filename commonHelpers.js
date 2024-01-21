import{i as l,S as d}from"./assets/vendor-46aac873.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const u=document.querySelector("form"),f=document.querySelector(".input"),c=document.querySelector(".gallery"),a=document.querySelector(".loader-container");u.addEventListener("submit",s=>{s.preventDefault();const o=f.value;a.classList.add("visibility"),p(o)});function p(s){const i=`https://pixabay.com/api/?key=41928884-dc2fda080aeeea262233bfc7c&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`;fetch(i).then(e=>{if(a.classList.remove("visibility"),!e.ok)throw new Error("Network response was not ok");return e.json()}).then(e=>{e.hits.length>0?(m(),y(e.hits)):l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})}).catch(e=>{a.classList.remove("visibility"),l.error({title:"Error",message:"Sorry, there was an error. Please try again later."}),console.error("Error:",e)})}function y(s){s.forEach(r=>{const i=`
    <a href="${r.largeImageURL}" data-lightbox="gallery" data-title="${r.tags}">
      <li class="card">
        <img src="${r.webformatURL}" alt="${r.tags}" class="card-img">
        <div class="card-info">
          <div class="div-info">
            <p>Likes <span>${r.likes}</span></p>
          </div>
          <div class="div-info">
            <p>Views <span>${r.views}</span></p>
            </div>
          <div class="div-info">
            <p>Comments <span>${r.comments}</span></p>
            </div>
          <div class="div-info">
            <p>Downloads <span>${r.downloads}</span></p>
            </div>
        </div>
      </li>
    </a>
    `;c.insertAdjacentHTML("beforeend",i)}),new d(".gallery a").refresh()}function m(){c.innerHTML=""}
//# sourceMappingURL=commonHelpers.js.map
