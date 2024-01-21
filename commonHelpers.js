import{i as d,a as y,S as h}from"./assets/vendor-89feecc5.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const e of r)if(e.type==="childList")for(const s of e.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function a(r){const e={};return r.integrity&&(e.integrity=r.integrity),r.referrerpolicy&&(e.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?e.credentials="include":r.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function i(r){if(r.ep)return;r.ep=!0;const e=a(r);fetch(r.href,e)}})();const g=document.querySelector("form"),v=document.querySelector(".input"),f=document.querySelector(".gallery"),n=document.querySelector(".loader-container"),l=document.querySelector(".load-more-btn");let c=1,u="";g.addEventListener("submit",async t=>{t.preventDefault(),u=v.value,c=1,n.classList.add("visibility"),l.classList.remove("load-more-btn-active");try{const o=await p(u,c);o.hits.length>0?(b(),m(o.hits)):d.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})}catch(o){n.classList.remove("visibility"),d.error({title:"Error",message:"Sorry, there was an error. Please try again later."}),console.error("Error:",o)}});l.addEventListener("click",async()=>{c++,n.classList.add("visibility"),l.classList.remove("load-more-btn-active");try{const t=await p(u,c);t.hits.length>0&&(m(t.hits),L(260*2))}catch(t){n.classList.remove("visibility"),d.error({title:"Error",message:"Sorry, there was an error. Please try again later."}),console.error("Error:",t)}});async function p(t,o){try{const e=`https://pixabay.com/api/?key=41928884-dc2fda080aeeea262233bfc7c&q=${t}&image_type=photo&orientation=horizontal&safesearch=true&page=${o}&per_page=${40}`,s=await y.get(e);if(!s.data.hits)throw new Error("Invalid response from the server");return s.data}catch(a){throw new Error(`Failed to fetch images: ${a.message}`)}}function m(t){n.classList.remove("visibility"),t.forEach(e=>{const s=`
      <a href="${e.largeImageURL}" data-lightbox="gallery" data-title="${e.tags}">
        <li class="card">
          <img src="${e.webformatURL}" alt="${e.tags}" class="card-img">
          <div class="card-info">
            <div class="div-info">
              <p>Likes <span>${e.likes}</span></p>
            </div>
            <div class="div-info">
              <p>Views <span>${e.views}</span></p>
            </div>
            <div class="div-info">
              <p>Comments <span>${e.comments}</span></p>
            </div>
            <div class="div-info">
              <p>Downloads <span>${e.downloads}</span></p>
            </div>
          </div>
        </li>
      </a>
    `;f.insertAdjacentHTML("beforeend",s)}),l.classList.add("load-more-btn-active"),new h(".gallery a").refresh();const i=Math.ceil(120/40);c===i&&(l.classList.remove("load-more-btn-active"),d.info({title:"End of Collection",message:"We're sorry, but you've reached the end of search results."}))}function b(){f.innerHTML=""}function L(t){window.scrollBy({top:t,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
