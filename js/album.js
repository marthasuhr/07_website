//lav url search objekt
const urlParams = new URLSearchParams(window.location.search);
console.log("urlParams", urlParams);
//find id
const id = urlParams.get("id");
console.log("id", id);

const imagePath = `https://kea-alt-del.dk/t7/images/webp/640/${id}.webp`;

const endpoint = `https://kea-alt-del.dk/t7/api/products/${id}`;

function hentData() {
  fetch(endpoint)
    .then((respons) => respons.json())
    .then(visProdukt);
}

function visProdukt(produkt) {
  console.log(produkt);
  document.querySelector(".model").textContent = produkt.productdisplayname;
  document.querySelector(".info").querySelector(".model").textContent = produkt.productdisplayname;
  document.querySelector("#variantname").textContent = produkt.variantname;
  document.querySelector("#basecolour").textContent = produkt.basecolour;
  document.querySelector("#id").textContent = produkt.id;
  document.querySelector(".brandname").textContent = produkt.brandname;
  document.querySelector(".info").querySelector(".brandname").textContent = produkt.brandname;
  document.querySelector("#brandbio").textContent = produkt.brandbio;
  document.querySelector("img").src = imagePath;
}

hentData();
