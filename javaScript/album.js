var albums = [
  {
    name: "JACKBOYS",
    artist: "stolen",
    image: "../imgs/jackboysCover.jpg",
    tracks: [
      {
        title: "arson",
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
        title: "jack",
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

var div = document.getElementById("container");

albums.map(function (el) {
  div.innerHTML += `
                     <div class="cards">
                     <h3>${el.tracks[0].title}</h3>
                     <h3>${el.name}</h3> 
                      <audio controls src="${el.tracks[0].path}" class="musicPlayer"></audio>
                     <img src=${el.image}>
                      <button class="nextPrev">Next</button>
                      <button class="nextPrev">Previous</button>
                    </div>`;
});







// #######################################################

// function PlayList(){
// var instance={}
// instance.song=albums
// instance.playedSongs=0
// instance.unplayedSong=this.song.length
// instance.playedSongsList=[]
// instance.nextSong=this.song[1]
// instance.currentSong=this.song[0]
// instance.lastPlayedSong=null
// // instance.addSong=addSong
// instance.playCurrentSong=playCurrentSong
// instance.shufflePlay=shuffle
// return instance
// }

// // var addSong=function(){
// //   this.song.push(Song(title,artist,duration))
// //   this.currentSong=this.song[0]
// //   this.nextSong=this.song[1]
// //   this.unplayedSong++
// // }

// var playCurrentSong=function(){
//   for(var i=0;i<this.song.length;i++){
//       if(this.currentSong===this.song[i]){
//    this.playedSongsList.push(this.currentSong)
//    this.song[i].played="played"
//    this.lastPlayedSong=this.currentSong
//    this.currentSong=this.nextSong
//   }
//   if(this.nextSong=this.song[i]){
//       this.nextSong=this.song[i+1]
//   }
//   this.playedSongs++
//   this.unplayedSong--
//   }
// }
// var shuffle=function(){
//   var arr=[]
//   for(var i=0;i<this.song.length;i++){
//       if(this.song[i].played="played"){
//           arr.push(this.song[i])
//       }
//   }
//   return arr
// }
// #######################################################