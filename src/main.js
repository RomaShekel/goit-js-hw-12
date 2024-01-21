import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import axios from "axios";

const lightbox = new SimpleLightbox('.gallery a');
const form = document.querySelector("form");
const input = document.querySelector(".input");
const gallery = document.querySelector(".gallery");
const loader = document.querySelector(".loader-container");
const loadMoreBtn = document.querySelector(".load-more-btn");

let currentPage = 1;
let currentQuery = "";

let totalHits = 0; //змінна збігів

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  currentQuery = input.value;
  currentPage = 1;
  loader.classList.add("hidden");
  loadMoreBtn.classList.remove("load-more-btn-active");

  try {
    const data = await searchImages(currentQuery, currentPage);

    totalHits = data.totalHitshits || 0;

    if (data.hits.length > 0) {
      clearGallery();
      addImagesToGallery(data.hits);
    } else {
      iziToast.error({
        title: "Error",
        message: "Sorry, there are no images matching your search query. Please try again!",
      });
    }
  } catch (error) {
    loader.classList.remove("hidden");
    iziToast.error({
      title: "Error",
      message: "Sorry, there was an error. Please try again later.",
    });
    console.error("Error:", error);
  }
});

loadMoreBtn.addEventListener("click", async () => {
  currentPage++;
  loader.classList.add("hidden");
  loadMoreBtn.classList.remove("load-more-btn-active");

  try {
    const data = await searchImages(currentQuery, currentPage);

    if (data.hits.length > 0) {
      addImagesToGallery(data.hits);
      smoothScroll(260 * 2);
    }

    const totalPages = Math.ceil(totalHits / 40);

  if (currentPage > totalPages) {
    loadMoreBtn.classList.remove("load-more-btn-active");
    iziToast.info({
      title: "End of Collection",
      message: "We're sorry, but you've reached the end of search results.",
    });
  }

  } catch (error) {
    loader.classList.remove("hidden");
    iziToast.error({
      title: "Error",
      message: "Sorry, there was an error. Please try again later.",
    });
    console.error("Error:", error);
  }
});

async function searchImages(query, page) {
  try {
    const apiKey = "41928884-dc2fda080aeeea262233bfc7c";
    const apiUrl = "https://pixabay.com/api/";
    const perPage = 40;
    const requestUrl = `${apiUrl}?key=${apiKey}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`;

    const response = await axios.get(requestUrl);

    if (!response.data || response.data.hits.length === 0) {
      throw new Error("Invalid response from the server");
    }

    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch images: ${error.message}`);
  }
}

function addImagesToGallery(images) {
  loader.classList.remove("hidden");
  images.forEach((image) => {
    const cardMarkup = `
      <a href="${image.largeImageURL}" data-lightbox="gallery" data-title="${image.tags}">
        <li class="card">
          <img src="${image.webformatURL}" alt="${image.tags}" class="card-img">
          <div class="card-info">
            <div class="div-info">
              <p>Likes <span>${image.likes}</span></p>
            </div>
            <div class="div-info">
              <p>Views <span>${image.views}</span></p>
            </div>
            <div class="div-info">
              <p>Comments <span>${image.comments}</span></p>
            </div>
            <div class="div-info">
              <p>Downloads <span>${image.downloads}</span></p>
            </div>
          </div>
        </li>
      </a>
    `;

    gallery.insertAdjacentHTML("beforeend", cardMarkup);
  });
  loadMoreBtn.classList.add("load-more-btn-active");


  lightbox.refresh();


  // const totalPages = Math.ceil(totalHits / 120);
  // const isLastPage = currentPage === totalPages;

  // if (isLastPage) {
  //   loadMoreBtn.classList.remove("load-more-btn-active");
  //   iziToast.info({
  //     title: "End of Collection",
  //     message: "We're sorry, but you've reached the end of search results.",
  //   });
  // }

}

function clearGallery() {
  gallery.innerHTML = "";
}

function smoothScroll(distance) {
  window.scrollBy({
    top: distance,
    behavior: "smooth",
  });
}

