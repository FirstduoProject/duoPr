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

            <button id = "next" onclick="NextSongs()"><i class="fa-solid fa-forward-step"></i></button>
            <button><i class="fa-solid fa-backward-step"></i></button>
          </div>`;
    }
    break;
  }

} 

document.querySelector("#next").onclick = function(){
  var currentSong = track[0]
  var previousSong = none;
  var nextSong = track[1]
  for (let i = 0; i < track.length; i++) {
    if(currentSong===track[i]) {
      previousSong= currentSong;
      currentSong = nextSong;
    }
    
  }
};





// div.innerHTML += `<div>
//                     <input id="search" type="text">
//                     <button onclick="SearchFor()">Search</button>
//                     </div>`;

// var seach = document.getElementById("search")



// function SearchFor() {

// }

