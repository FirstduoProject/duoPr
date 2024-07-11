import { albums } from "./albumsVar.js";

var urlParams = new URLSearchParams(window.location.search);
var addAlbumName = urlParams.get("album");

var div = document.getElementById("container");

for (let i = 0; i < albums.length; i++) {
  if (albums[i].name === addAlbumName) {
    var album = albums[i];
    for (let j = 0; j < album.tracks.length; j++) {
      var track = album.tracks[j];
      div.innerHTML += `
          <div class="cards">
            <h3>${track.title}</h3>
            <h3>${track.artist}</h3>
            <audio controls src="${track.path}" class="musicPlayer"></audio>
            <img src="${track.image}">
            <button>Next</button>
            <button>Previous</button>
          </div>`;
    }
    break;
  }
}


