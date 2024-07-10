

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



  var div = document.getElementById("container")


  albums.map(function(el){
    div.innerHTML +=(`
                     <div class="cards">
                     <h3  >${el.tracks[0].title}<h3>
                     <h3  >${el.name}<h3> 
                     <img src=${el.image}>
                     <audio controls src="${el.tracks[0].path}"></audio>
                    </div>`

)});












// factory method

// function MusicList(title,name,time,pic){
//     var List ={}
//     music.album = []
//     music.albums = []
//     music.title = title
//     music.name = name
//     music.time = time
//     music.pic = pic

//     return List
// }   


// function MusicFunctions() {
//     var Functions = {}

//     return Functions

// }


// var NansiAjrem1 =  MusicList("Ya Tabtab","Nancy Ajrem","4:28","https://i1.sndcdn.com/artworks-000098464882-24cit3-t240x240.jpg") 
// var NansiAjrem2 =  MusicList(" Ehsas Gedeid","Nancy Ajrem","7:56","https://i.scdn.co/image/ab67616d00001e02ea248b587f0b659559c8d1b5") 
// var NansiAjrem3 =  MusicList(" Moegaba","Nancy Ajrem","4:09","https://i1.sndcdn.com/artworks-000170923309-l59xys-t500x500.jpg") 
// var NansiAjrem4 =  MusicList(" Moushtaka Lik","Nancy Ajrem","4:55","https://i1.sndcdn.com/artworks-000469655148-gso3nm-t500x500.jpg") 
// var NansiAjrem5 =  MusicList(" Ana Yalli Bahebak","Nancy Ajrem","3:26","https://i.ytimg.com/vi/_dWF84vjAs8/sddefault.jpg") 

// this.album.push(NansiAjrem1)
// this.album.push(NansiAjrem2)
// this.album.push(NansiAjrem3)
// this.album.push(NansiAjrem4)
// this.album.push(NansiAjrem5)



