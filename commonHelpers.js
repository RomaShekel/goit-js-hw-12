import{S as y,i as c,a as g}from"./assets/vendor-89feecc5.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))d(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&d(a)}).observe(document,{childList:!0,subtree:!0});function s(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function d(r){if(r.ep)return;r.ep=!0;const o=s(r);fetch(r.href,o)}})();const v=new y(".gallery a"),L=document.querySelector("form"),b=document.querySelector(".input"),h=document.querySelector(".gallery"),l=document.querySelector(".loader-container"),n=document.querySelector(".load-more-btn");let i=1,u="",f=0;L.addEventListener("submit",async t=>{t.preventDefault(),u=b.value,i=1,l.classList.add("hidden"),n.classList.remove("load-more-btn-active");try{const e=await p(u,i);f=e.total||0,e.hits.length>0?(w(),m(e.hits)):c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})}catch(e){l.classList.remove("hidden"),c.error({title:"Error",message:"Sorry, there was an error. Please try again later."}),console.error("Error:",e)}});n.addEventListener("click",async()=>{i++,l.classList.add("hidden"),n.classList.remove("load-more-btn-active");try{const t=await p(u,i);t.hits.length>0&&(m(t.hits),$(260*2));const e=i*t.hits.length>=f,s=Math.ceil(f/40);e&&(n.classList.remove("load-more-btn-active"),c.info({title:"End of Collection",message:"We're sorry, but you've reached the end of search results."}))}catch(t){l.classList.remove("hidden"),c.error({title:"Error",message:"Sorry, there was an error. Please try again later."}),console.error("Error:",t)}});async function p(t,e){try{const o=`https://pixabay.com/api/?key=41928884-dc2fda080aeeea262233bfc7c&q=${t}&image_type=photo&orientation=horizontal&safesearch=true&page=${e}&per_page=${40}`,a=await g.get(o);if(!a.data||a.data.hits.length===0)throw new Error("Invalid response from the server");return a.data}catch(s){throw new Error(`Failed to fetch images: ${s.message}`)}}function m(t){l.classList.remove("hidden"),t.forEach(e=>{const s=`
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
    `;h.insertAdjacentHTML("beforeend",s)}),n.classList.add("load-more-btn-active"),v.refresh()}function w(){h.innerHTML=""}function $(t){window.scrollBy({top:t,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
