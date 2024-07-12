import { albums } from "./albumsVar.js";

var urlParams = new URLSearchParams(window.location.search);
var searchQuery = urlParams.get("q");
var mydiv = document.querySelector(".album");

if (!searchQuery) {
  albums.map(function (el) {
    console.log(el.name);
    mydiv.innerHTML += `<div class='card'>
    <h1>${el.name}</h1>
    <h2>${el.artist}</h2>
    <a href=/html/album.html?album=${encodeURI(el.name)}><img src=${
      el.image
    } alt=""></a>
    </div>`;
  });
} else {
  albums.map(function (el) {
    if (
      el.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      el.artist.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      mydiv.innerHTML += `<div class='card'>
    <h1>${el.name}</h1>
    <h2>${el.artist}</h2>
    <a href=/html/album.html?album=${el.name}><img src=${el.image} alt=""></a>
    </div>`;
    }
  });
}
