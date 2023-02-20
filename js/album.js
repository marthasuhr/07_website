//lav url search objekt
const urlParams = new URLSearchParams(window.location.search);
console.log("urlParams", urlParams);
//find id
const id = urlParams.get("_id");
console.log("_id", id);

const url = `https://musicgallery-27fd.restdb.io/rest/albums/${id}`;

const options = {
  headers: {
    "x-apikey": "63efb163478852088da68404",
  },
};

async function hentData() {
  const respons = await fetch(url, options);
  const json = await respons.json();
  visAlbum();
}

function visAlbum(album) {
  console.log(album);
  document.querySelector("img").src = "" + album.albumcover;
  document.querySelector("h1").textContent = album.album;
  document.querySelector("h3").textContent = album.artist + " / " + album.year;
  document.querySelector(".sange").innerHTML = album.songs;
}

hentData();
