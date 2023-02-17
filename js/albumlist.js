//https://kea-alt-del.dk/t7/api/products
const urlParams = new URLSearchParams(window.location.search);
const cat = urlParams.get("cat");
//hent data

document.querySelector("h2").textContent = cat;

const url = `https://kea-alt-del.dk/t7/api/products?limit=20&category=${cat}`;

//fra persongalleriøvelse

const url2 = "https://persongalleri-955c.restdb.io/rest/persongalleri";

const options = {
  headers: {
    "x-apikey": "63e9f2e7478852088da680fd",
  },
};

async function hentData() {
  const respons = await fetch(url, options);
  const json = await respons.json();
  vis(json);
}

const main = document.querySelector("main");
const template = document.querySelector("template").content;

function vis(json) {
  console.log(json);
  json.forEach((person) => {
    const klon = template.cloneNode(true);
    klon.querySelector(".billede").src = "billeder/" + person.billede;
    klon.querySelector(".fornavn").textContent = person.fornavn;
    klon.querySelector(".efternavn").textContent = person.efternavn;
    klon.querySelector(".email").textContent = person.email;
    main.appendChild(klon);
  });
}

hentData();
