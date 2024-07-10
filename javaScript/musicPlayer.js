var albums = [
  {
    name: "JACKBOYS",
    artist: "Pop Smoke",
    image: "../imgs/jackboysCover.jpg",
    tracks: [
      {
        title: "Gatti",
        artist: "Pop Smoke",
        image: "../imgs/jackboysCover.jpg",
        path: "../music/JACKBOYS, Pop Smoke, Travis Scott - GATTI (Audio).mp3",
      },
    ],
  },
  {
    name: "JACKBOYS",
    artist: "Pop Smoke",
    image: "../imgs/jackboysCover.jpg",
    tracks: [
      {
        title: "Gatti",
        artist: "Pop Smoke",
        image: "../imgs/jackboysCover.jpg",
        path: "../music/JACKBOYS, Pop Smoke, Travis Scott - GATTI (Audio).mp3",
      },
    ],
  },
  {
    name: "JACKBOYS",
    artist: "Pop Smoke",
    image: "../imgs/jackboysCover.jpg",
    tracks: [
      {
        title: "Gatti",
        artist: "Pop Smoke",
        image: "../imgs/jackboysCover.jpg",
        path: "../music/JACKBOYS, Pop Smoke, Travis Scott - GATTI (Audio).mp3",
      },
    ],
  },
  {
    name: "JACKBOYS",
    artist: "Pop Smoke",
    image: "../imgs/jackboysCover.jpg",
    tracks: [
      {
        title: "Gatti",
        artist: "Pop Smoke",
        image: "../imgs/jackboysCover.jpg",
        path: "../music/JACKBOYS, Pop Smoke, Travis Scott - GATTI (Audio).mp3",
      },
    ],
  },
  {
    name: "JACKBOYS",
    artist: "Pop Smoke",
    image: "../imgs/jackboysCover.jpg",
    tracks: [
      {
        title: "Gatti",
        artist: "Pop Smoke",
        image: "../imgs/jackboysCover.jpg",
        path: "../music/JACKBOYS, Pop Smoke, Travis Scott - GATTI (Audio).mp3",
      },
    ],
  },
  {
    name: "JACKBOYS",
    artist: "Pop Smoke",
    image: "../imgs/jackboysCover.jpg",
    tracks: [
      {
        title: "Gatti",
        artist: "Pop Smoke",
        image: "../imgs/jackboysCover.jpg",
        path: "../music/JACKBOYS, Pop Smoke, Travis Scott - GATTI (Audio).mp3",
      },
    ],
  },
];

var mydiv = document.querySelector(".album");

albums.map(function (el) {
  mydiv.innerHTML += (`<div class='card'>
    <h1>${el.name}</h1>
    <h2>${el.artist}</h2>
    <img src=${el.image} alt="">
    </div>`);
});

