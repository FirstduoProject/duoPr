var audio = document.getElementById('audio');
var playPauseButton = document.getElementById('play-pause');
 var muteButton = document.getElementById('mute');
 var seekBar = document.getElementById('seek-bar');
 var volumeBar = document.getElementById('volume-bar');
 var currentTimeDisplay = document.getElementById('current-time');
 var durationDisplay = document.getElementById('duration');

playPauseButton.addEventListener('click', function() {
    if (audio.paused) {
        audio.play();
        playPauseButton.innerHTML = '<i class="fa-solid fa-pause"></i>';
    } else {
        audio.pause();
        playPauseButton.innerHTML = '<i class="fa-solid fa-play"></i>';
    }
});



seekBar.addEventListener('input', function() {
    audio.currentTime = seekBar.value;
});

audio.addEventListener('timeupdate', function() {
    seekBar.value = audio.currentTime;
    currentTimeDisplay.textContent = formatTime(audio.currentTime);
});

audio.addEventListener('durationchange', function() {
    seekBar.max = audio.duration;
    durationDisplay.textContent = formatTime(audio.duration);
});

volumeBar.addEventListener('input', function() {
    audio.volume = volumeBar.value;
});


function formatTime(time) {
    var minutes = Math.floor(time / 60);
    var seconds = Math.floor(time % 60);
    var formattedSeconds = seconds;

    if (seconds < 10) {
        formattedSeconds = '0' + seconds;
    }

    return minutes + ':' + formattedSeconds;
}

