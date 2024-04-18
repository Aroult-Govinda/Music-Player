var arr = [
    { songName: "Chota Sa Fasana", url: "./songs/Chota Sa Fasana - Karwaan 320 Kbps.mp3", artist: "Arijit Singh", img: "./images/Karwaan.jpg", duration: "04:04" },
    { songName: "Pehle Bhi main", url: "./songs/Pehle Bhi Main.mp3", artist: "Vishal Mishra", img: "./images/animal.jpg", duration: "04:10" },
    { songName: "Kadam", url: "./songs/Kadam - Karwaan 320 Kbps.mp3", artist: "Prateek Khuahad", img: "./images/Karwaan.jpg", duration: "03:34" },
    { songName: "Born to Shine", url: "./songs/Born to Shine - GOAT 320 Kbps.mp3", artist: "Diljit Dosanjh", img: "./images/Goat.jpg", duration: "03:33" },
    { songName: "Chauffeur", url: "./songs/Chauffeur - Diljit Dosanjh 320 Kbps.mp3", artist: "Diljit Dosanjh", img: "./images/Chauffeur.jpg", duration: "03:24" },
    { songName: "Pachtaoge", url: "./songs/Pachtaoge - Arijit Singh 320 Kbps.mp3", artist: "Arijit Singh", img: "./images/Pachtaoge.jpg", duration: "03:46" }
];

var right = document.querySelector(".right");
var audio = new Audio();

function mainFunction() {
    var clutter = "";
    arr.forEach(function (elem, index) {
        clutter += `<div class="song-bar" id="${index}">
        <div class = "part1">
        <div class="cvr-img">
            <img src="${elem.img}" alt="">
        </div>
        <div class="content">
            <h2>${elem.songName}</h2>
            <h3>${elem.artist}</h3>
        </div>
        </div>
        <h4>${elem.duration}</h4>
    </div>`;
    });

    right.innerHTML = clutter;
}

mainFunction();

right.addEventListener("click", function (dets) {
    var songBar = dets.target.closest(".song-bar");
    if (songBar) {
        var index = songBar.getAttribute("id");
        audio.src = (arr[index].url);
        audio.play();
        function playSong(index) {
            var currentSongElement = document.querySelector('.current-song');
            var currentArtistElement = document.querySelector('.current-artist');
            var mainCoverImage = document.querySelector('#cover-image');
            currentSongElement.style.opacity = 0;
            currentArtistElement.style.opacity = 0;
            mainCoverImage.style.opacity = 0;
            setTimeout(function () {
                currentSongElement.textContent = arr[index].songName;
                currentArtistElement.textContent = arr[index].artist;
                mainCoverImage.src = arr[index].img
                currentSongElement.style.opacity = 1;
                currentArtistElement.style.opacity = 1;
                mainCoverImage.style.opacity = 1;
            }, 300);
        }
        playSong(index);
    }
});


