//https://musicgallery-27fd.restdb.io/rest/albums
// og her er apikey 63efb163478852088da68404

const urlParams = new URLSearchParams(window.location.search);
const album = urlParams.get("album");

const url = `https://musicgallery-27fd.restdb.io/rest/albums`;

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
const main = document.querySelector("div");
const template = document.querySelector("#minTemplate").content;

function vis(json) {
  console.log(json);
  json.forEach((album) => {
    const klon = template.cloneNode(true);
    klon.querySelector("img").src = "" + album.albumcover;
    klon.querySelector("h2").textContent = album.album;
    klon.querySelector("h3").textContent = album.artist;
    klon.querySelector("p").textContent = album.year;
    //klon.querySelector(".sange").innerHTML = album.songs;

    //copy.querySelector("a").href = "album.html?id=" + album.id;

    main.appendChild(klon);
  });
}
console.log("HEJ");
hentData();
