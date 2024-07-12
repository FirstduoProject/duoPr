import { albums } from "./albumsVar.js";
var urlParams = new URLSearchParams(window.location.search);

var addAlbumName = urlParams.get("album");

var div = document.getElementById("container");
var currentAlbum = albums.filter(function (el) {
  return el.name === addAlbumName;
});

var allTracks = currentAlbum[0].tracks;
var track = currentAlbum[0].tracks[0];

var container = document.getElementById("container");
var tracksHtml = allTracks
  .map(function (song, index) {
    return `
      <div class="cards">
          <h3 class="names">${song.title}</h3>
          <h3 class="names">${song.artist}</h3>
          <div class="btns">
              <button class="playNowBtn" data-index="${index}"><i class="fa-solid fa-forward-step"></i></button>
          </div>
      </div>
  `;
  })
  .join("");

container.innerHTML = tracksHtml;

container.addEventListener("click", function (event) {
  if (event.target.closest(".playNowBtn")) {
    var index = event.target.closest(".playNowBtn").dataset.index;
    playSong(index);
  }
});

div.innerHTML += `
      <div class="cards">
        <h3 class="names" id="trackTitle" >${track.title}</h3>
        <h3 class="names" id="trackArtist" >${track.artist}</h3>
        <audio controls src="${track.path}" class="musicPlayer" id="player"></audio>
        <div class="btns"><button id="prev"></i></button>
        <button id="next"></i></button></div>
        <img src="${track.image}">
        </div>`;

var nextBtn = document.getElementById("next");
var prevBtn = document.getElementById("prev");
var trackTitle = document.getElementById("trackTitle");
var trackArtist = document.getElementById("trackArtist");
var audioPlayer = document.getElementById("player");
let currentIndex = 0;

function playSong(index) {
  var track = allTracks[index];
  audioPlayer.src = track.path;
  trackTitle.innerHTML = track.title;
  trackArtist.innerHTML = track.artist;
  audioPlayer.play();
}

nextBtn.addEventListener("click", function () {
  if (currentIndex < allTracks.length - 1) {
    currentIndex = currentIndex + 1;
  } else {
    currentIndex = 0;
  }
  playSong(currentIndex);
});

prevBtn.addEventListener("click", function () {
  if (currentIndex > 0) {
    currentIndex = currentIndex - 1;
  } else {
    currentIndex = allTracks.length - 1;
  }
  playSong(currentIndex);
});
