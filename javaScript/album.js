import { albums } from "./albumsVar.js";

var urlParams = new URLSearchParams(window.location.search);
var addAlbumName = urlParams.get("album");

var div = document.getElementById("container");

for (var i = 0; i < albums.length; i++) {
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



// div.innerHTML += `<nav>
// <a href="musicPlayer.html" ><i class="fa-brands fa-spotify"></i></a>
// <a href="#second"><i class="fas fa-search"></i></a>
// <a href="#third"><i class="fa-regular fa-heart"></i></a>
// // <a href="#fourth"><i class="far fa-address-card"></i></a> //
// </nav> `;




function each(array, func) {
  for (var i = 0; i < array.length; i++) {
    func(array[i]);
  }
}

function map(people, f) {
  var arr = [];
  each(people, function (el, i) {
    console.log(i);
    arr.push(f(el, i));
  });
  return arr;
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
   

// function searchFor() {
//   var newWord = document.getElementById("search").value.trim().toLowerCase(); 

//   var filteredTracks = filter(track, function(el) {
//     return newWord === el.title.toLowerCase() || newWord === el.artist.toLowerCase()
//   });

//   div.style.display = "none";

//   each(filteredTracks,function(track) {
//     div.innerHTML += `
//       <div class="cards">
//         <h3 class="names">${track.title}</h3>
//         <h3 class="names">${track.artist}</h3>
//         <audio controls src="${track.path}" class="musicPlayer"></audio>
//         <div class="btns">
//           <button class="next"><i class="fa-solid fa-backward-step"></i></button>
//           <button class="prev"><i class="fa-solid fa-forward-step"></i></button>
//         </div>
//         <img src="${track.image}">
//       </div>`;
//   });
//  }



  function addToFav(){
    var fav = []
    fav.push(album.tracks)
    return fav
  }


document.getElementById("heart").onclick = function(){addToFav()};
document.getElementById("btn-search").onclick = function(){searchFor()};