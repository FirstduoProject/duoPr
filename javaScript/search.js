var searchInput = document.getElementById("search");
var searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", function (e) {
  window.location.href = `/html/musicPlayer.html?q=${searchInput.value}`;
});
