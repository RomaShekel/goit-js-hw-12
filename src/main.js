import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const form = document.querySelector("form");
const input = document.querySelector(".input");
const gallery = document.querySelector(".gallery");
const loader = document.querySelector(".loader-container")

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const query = input.value;

  loader.classList.add("visibility");
    searchImages(query);
});


function searchImages(query) {
  const apiKey = "41928884-dc2fda080aeeea262233bfc7c";
  const apiUrl = "https://pixabay.com/api/";
  const requestUrl = `${apiUrl}?key=${apiKey}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`;

  fetch(requestUrl)
    .then(response => { 
      loader.classList.remove("visibility");
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      if (data.hits.length > 0) {
        clearGallery();
        addImagesToGallery(data.hits);

      } else {
        iziToast.error({
          title: 'Error',
          message: "Sorry, there are no images matching your search query. Please try again!",
        });
      }
    })
    .catch(error => {
      loader.classList.remove("visibility");
      iziToast.error({
        title: 'Error',
        message: "Sorry, there was an error. Please try again later.",
      });
      console.error('Error:', error);
    });
}

function addImagesToGallery(images) {
  images.forEach(image => {
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
  const lightbox = new SimpleLightbox('.gallery a');
  lightbox.refresh();
}

function clearGallery() {
  gallery.innerHTML = "";
}
