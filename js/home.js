const urlParams = new URLSearchParams(window.location.search);
const album = urlParams.get("album");

const url = "https://musicgallery-27fd.restdb.io/rest/albums?max=4";

const options = {
  headers: {
    "x-apikey": "63efb163478852088da68404",
  },
};

async function hentData() {
  const resspons = await fetch(url, options);
  const json = await resspons.json();
  vis(json);
}
const main = document.querySelector(".template_con");
const template = document.querySelector("template").content;

function vis(json) {
  console.log(json);
  json.forEach((album) => {
    const klon = template.cloneNode(true);
    klon.querySelector;
    klon.querySelector("img").src = "" + album.albumcover;
    klon.querySelector("h2").textContent = album.album;
    klon.querySelector("h3").textContent = album.artist;

    main.appendChild(klon);
  });
}

hentData();
