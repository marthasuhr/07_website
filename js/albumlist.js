//https://musicgallery-27fd.restdb.io/rest/albums
// og her er apikey 63efb163478852088da68404

const urlParams = new URLSearchParams(window.location.search);
const album = urlParams.get("album");
const cat = urlParams.get("category");

const url = `https://musicgallery-27fd.restdb.io/rest/albums?q={"category":"${cat}"}`;

document.querySelector(".category").textContent = cat;

const options = {
  headers: {
    "x-apikey": "63efb163478852088da68404",
  },
};

//hent data

console.log("hejsa");

async function hentData() {
  const response = await fetch(url, options);
  const json = await response.json();
  vis(json);
}

// const main gør at elementerne kommer i et grid.
const main = document.querySelector(".albumliste_grid");
const template = document.querySelector("#minTemplate").content;

function vis(json) {
  json.forEach((album) => {
    const klon = template.cloneNode(true);
    klon.querySelector("img").src = "" + album.albumcover;
    klon.querySelector("h2").textContent = album.album;
    klon.querySelector("h3").textContent = album.artist;
    klon.querySelector("p").textContent = album.year;

    //klon.querySelector(".sange").innerHTML = album.songs;
    console.log(album._id);

    klon.querySelector("a").href = "album.html?id=" + album._id;

    main.appendChild(klon);
  });
}
console.log("HEJ");
hentData();
