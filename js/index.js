const url = "https://musicgallery-27fd.restdb.io/rest/albums";
const options = {
  headers: {
    "x-apikey": "63efb163478852088da68404",
  },
};
async function hentData() {
  const resspons = await fetch(url, options);
  const json = await resspons.json();
}
function vis(json) {
  console.log(json);
}
hentData();
