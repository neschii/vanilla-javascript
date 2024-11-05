wrapper = document.querySelector(".wrapper"),
musicImage = wrapper.querySelector(".img-card img"),
musicArtist = wrapper.querySelector(".song-name .artist"),
musicName = wrapper.querySelector(".song-name .music"),
musicTime = wrapper.querySelector(".last-time"),
musicDuration = wrapper.querySelector(".total-time")
mainAudio = wrapper.querySelector("#main-audio"),
nextBtn = wrapper.querySelector("#next-btn"),
playPause = wrapper.querySelector("#play"),
trackBar = wrapper.querySelector("#progressBar");


let musicIndex = 1;
window.addEventListener("load", () => {
    loadMusic(musicIndex);
});

function loadMusic(indexNumb) {
    musicName.innerText = allMusic[indexNumb - 1].music;
    musicArtist.innerText = allMusic[indexNumb - 1].artist;
    musicTime.innerText = allMusic[indexNumb -1].time;
    musicImage.src = `img/${allMusic[indexNumb - 1].img}.jpg`;
    mainAudio.src = `songs/${allMusic[indexNumb - 1].src}.mp3`;
}

function nextMusic() {
    musicIndex++;
    musicIndex > allMusic.length ? musicIndex = 1 : musicIndex = musicIndex;
     loadMusic(musicIndex);
    playMusic(mainAudio.play);
}

function previousMusic() {
    musicIndex--;
    musicIndex < 1 ? musicIndex = allMusic.length : musicIndex = musicIndex;
     loadMusic(musicIndex);
         playMusic(mainAudio.play);
}
        function playMusic() {
         if (mainAudio.paused) { 
             mainAudio.play();
        } else { 
            mainAudio.pause();
        }
     }

mainAudio.addEventListener("timeupdate", (e)=> {
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;
    let progressWidth = (currentTime / duration ) * 100;
    trackBar.style.width = `${progressWidth}%`

    let currentMin = Math.floor(currentTime / 60);
    let currentSec = Math.floor(currentTime % 60);
        if(currentSec < 10) { currentSec = `0${currentSec}`; } 
    musicDuration.innerText = `${currentMin}:${currentSec}`

})

