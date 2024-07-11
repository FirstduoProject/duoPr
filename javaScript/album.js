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
            <div class="btns"><button id = "next" onclick="NextSongs()"><i class="fa-solid fa-backward-step"></i></button>
            <button id = "prev"><i class="fa-solid fa-forward-step"></i></button></div>
            <img src="${track.image}">
            </div>`
    }
    break;
  }
} 

// document.querySelector("#next").onclick = function NextSongs(){
 
//   for (let i = 0; i < track.length; i++) {
//     var currentSong = track[0]
//     var previousSong = null;
//     var nextSong   = track[1]
//     if(currentSong=== track[i]) {
//       previousSong = currentSong;
//       currentSong  = nextSong;
//     }
    
//   }
//   return nextSong
// };








// div.innerHTML += `<div>
//                     <input id="search" type="text">
//                     <button onclick="SearchFor()">Search</button>
//                     </div>`;

// var seach = document.getElementById("search")



// function SearchFor() {

// }

