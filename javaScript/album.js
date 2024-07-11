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
            <h3 class= "names">${track.title}</h3>
            <h3 class= "names">${track.artist}</h3>
            <audio controls src="${track.path}" class="musicPlayer"></audio>
            <div class="btns"><button id = "next" onclick="NextSongs()"><i class="fa-solid fa-backward-step"></i></button>
            <button id = "prev"><i class="fa-solid fa-forward-step"></i></button></div>
            <img src="${track.image}">
            </div>`}
    break;
  }
} 


document.querySelector("#next").onclick = function NextSongs(track){
 
  for (let i = 0; i < track.length; i++) {
    console.log(i)
    var currentSong = track[0]
    var previousSong = null;
    var nextSong   = track[1]
    if(currentSong === track[i]) {
      previousSong = currentSong;
      currentSong  = nextSong;
    }
  }
  return nextSong
};



function each(array, func) {
  for (var i = 0; i < array.length; i++) {
    func(array[i]);
  }
}

function filter(array,predicate) {
  var array2 = []

  each(array, function(element,i) {
      if(predicate(element,i)) {
          array2.push(element)
      }
  })
   
  return array2
}

function searchFor() {
  var newWord = document.getElementById("search").value.trim().toLowerCase(); 

  var filteredTracks = filter(track, function(el) {
    return newWord === el.title.toLowerCase();
  });


  var container = document.getElementById("container");
  container.innerHTML = "";

  filteredTracks.forEach(function(track) {
    container.innerHTML += `
      <div class="cards">
        <h3 class="names">${track.title}</h3>
        <h3 class="names">${track.artist}</h3>
        <audio controls src="${track.path}" class="musicPlayer"></audio>
        <div class="btns">
          <button class="next"><i class="fa-solid fa-backward-step"></i></button>
          <button class="prev"><i class="fa-solid fa-forward-step"></i></button>
        </div>
        <img src="${track.image}">
      </div>`;
  });
 }
