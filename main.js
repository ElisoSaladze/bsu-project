import { popularPaintings, popularArtists } from './data.js';

const closeNav = () => document.querySelector(".side-nav").classList.remove("open");
const openNav = () => document.querySelector(".side-nav").classList.add("open");

document.querySelector(".close-btn").addEventListener("click", closeNav);
document.querySelector(".play").addEventListener("click", openNav);


popularPaintings.forEach(p => console.log(p))


const displayDataOnScreen = (paintings) => {
    const box = document.querySelector("#arts");

    paintings.forEach(painting => {
        const card = document.createElement("div");

        const image = document.createElement("img");
        image.src = painting.src;

        const innerInfo = document.createElement("div");

        const title = document.createElement("h2");
        title.textContent = painting.title;

        const artist = document.createElement("p");
        artist.textContent = painting.artist

        const date = document.createElement("span");
        date.textContent = painting.year;

        const description = document.createElement("p");
        description.textContent = painting.description;

        card.appendChild(image);
        card.appendChild(innerInfo);
        innerInfo.appendChild(title);
        innerInfo.appendChild(artist);
        innerInfo.appendChild(date);
        innerInfo.appendChild(description);
        box.appendChild(card);
        card.classList.add("artwork")
        innerInfo.classList.add("more");
        if (box.childElementCount % 2 === 1) {
            card.classList.add('mirror');
        }
        if (box.childElementCount % 4 === 0) {
            card.classList.add("fourth");
        }
        console.log(box);
    })
}
displayDataOnScreen(popularPaintings);


const artworks = document.querySelectorAll('.artwork');
artworks.forEach((artwork, index) => {
  setTimeout(() => {
    artwork.classList.add('show');
  }, index * 1000);
});
  
  
  