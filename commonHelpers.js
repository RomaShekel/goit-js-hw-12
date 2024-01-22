import{S as w,i as n,a as L}from"./assets/vendor-89feecc5.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function a(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerpolicy&&(t.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?t.credentials="include":r.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(r){if(r.ep)return;r.ep=!0;const t=a(r);fetch(r.href,t)}})();const $=new w(".gallery a"),E=document.querySelector("form"),S=document.querySelector(".input"),p=document.querySelector(".gallery"),h=document.querySelector(".loader-container"),d=document.querySelector(".load-more-btn");let s=1,c="",m=0;E.addEventListener("submit",async o=>{o.preventDefault(),c=S.value,s=1,b();try{const e=await g(c,s);m=e.totalHitshits||0,e.hits.length>0?(q(),v(e.hits)):n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})}catch(e){u(),n.error({title:"Error",message:"Sorry, there was an error. Please try again later."}),console.error("Error:",e)}});d.addEventListener("click",async()=>{s++,b(),f();try{const o=await g(c,s);o.hits.length>0&&(v(o.hits),M(260*2));const e=Math.ceil(m/y);s>e&&(f(),n.info({title:"End of Collection",message:"We're sorry, but you've reached the end of search results."}))}catch(o){u(),n.error({title:"Error",message:"Sorry, there was an error. Please try again later."}),console.error("Error:",o)}});const y=40;async function g(o,e){try{const r=`https://pixabay.com/api/?key=41928884-dc2fda080aeeea262233bfc7c&q=${o}&image_type=photo&orientation=horizontal&safesearch=true&page=${e}&per_page=${y}`,t=await L.get(r);if(!t.data||t.data.hits.length===0)throw new Error("Invalid response from the server");return t.data}catch(a){throw new Error(`Failed to fetch images: ${a.message}`)}}function v(o){u(),o.forEach(e=>{const a=`
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
    `;p.insertAdjacentHTML("beforeend",a)}),P(),$.refresh()}function q(){p.innerHTML=""}function M(o){window.scrollBy({top:o,behavior:"smooth"})}function P(){d.classList.add("load-more-btn-active")}function f(){d.classList.remove("load-more-btn-active")}function b(){h.classList.add("visible")}function u(){h.classList.remove("visible")}
//# sourceMappingURL=commonHelpers.js.map
