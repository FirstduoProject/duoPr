import { albums } from "./albumsVar.js";

var mydiv = document.querySelector(".album");

albums.map(function (el) {
  mydiv.innerHTML += `<div class='card'>
    <h1>${el.name}</h1>
    <h2>${el.artist}</h2>
    <a href=/html/album.html?album=${el.name}><img src=${el.image} alt=""></a>
    </div>`;
});
