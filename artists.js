import {  popularArtists } from './data.js';

const closeNav = () => document.querySelector(".side-nav").classList.remove("open");
const openNav = () => document.querySelector(".side-nav").classList.add("open");

document.querySelector(".close-btn").addEventListener("click", closeNav);
document.querySelector(".play").addEventListener("click", openNav);


const displayArtistsOnScreen = (artists) => {
    const box = document.querySelector("#artists");

    artists.forEach((artist, index) => {
    const card = document.createElement("div");

    const image = document.createElement("img");
    image.src = artist.src;

    const innerInfo = document.createElement("div");

    const name = document.createElement("h2");
    name.textContent = artist.name;

    const nationality = document.createElement("p");
    nationality.textContent = "Nationality: " + artist.nationality;

    const lifespan = document.createElement("p");
    lifespan.textContent = "Born: " + artist.born + " | Died: " + artist.died;

    const notableWorks = document.createElement("p");
    notableWorks.textContent = "Notable Works: " + artist.notableWorks.join(", ");

    const description = document.createElement("p");
    description.textContent = artist.description;

    card.appendChild(image);
    card.appendChild(innerInfo);
    innerInfo.appendChild(name);
    innerInfo.appendChild(nationality);
    innerInfo.appendChild(lifespan);
    innerInfo.appendChild(notableWorks);
    innerInfo.appendChild(description);
    box.appendChild(card);
    card.classList.add("artwork");
    innerInfo.classList.add("more");
    if (index % 2 === 1) {
        card.classList.add("mirror");
    }
    if ((index + 1) % 4 === 0) {
        card.classList.add("fourth");
    }
    });
};

displayArtistsOnScreen(popularArtists);

  const artworks = document.querySelectorAll('.artwork');
  artworks.forEach((artwork, index) => {
  setTimeout(() => {
    artwork.classList.add('show');
  }, index * 1000);
});