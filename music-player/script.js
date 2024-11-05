wrapper = document.querySelector(".wrapper"),
musicImage = wrapper.querySelector(".img-card img"),
musicArtist = wrapper.querySelector(".song-name .artist"),
musicName = wrapper.querySelector(".song-name .music"),
mainAudio = wrapper.querySelector("#main-audio"),
nextBtn = wrapper.querySelector("#next-btn");

let musicIndex = 1;

window.addEventListener("load", () => {
    loadMusic(musicIndex);
});

function loadMusic(indexNumb) {
    musicName.innerText = allMusic[indexNumb - 1].music;
    musicArtist.innerText = allMusic[indexNumb - 1].artist;
    musicImage.src = `img/${allMusic[indexNumb - 1].img}.jpg`;
    mainAudio.src = `songs/${allMusic[indexNumb - 1].src}.mp3`;
}

function nextMusic() {
    musicIndex++;
    musicIndex > allMusic.length ? musicIndex = 1 : musicIndex = musicIndex;
     loadMusic(musicIndex);
}


function previousMusic() {
    musicIndex--;
    musicIndex < 1 ? musicIndex = allMusic.length : musicIndex = musicIndex;
     loadMusic(musicIndex);
}

