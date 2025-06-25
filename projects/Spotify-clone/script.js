let currSong = new Audio(); // set the default song
let songList; // songList of the particular folder on changing the folder it should update
let currFolder; // set the default folder

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

async function displayAlbum() {
  let response = await fetch("./assets/songs/");
  let htmlString = await response.text();
  let container = document.createElement("div");
  container.innerHTML = htmlString;
  const albums = document.querySelector(".albums");
  let anchorTags = container.getElementsByTagName("a");
  for (let i = 0; i < anchorTags.length; i++) {
    const anchor = anchorTags[i];
    if (anchor.href.includes("/assets/songs/")) {
      let b = anchor.href.split("/");
      let folder = b[b.length - 2];
      let response = await fetch(`./assets/songs/${folder}/info.json`);
      const info = await response.json();
      albums.innerHTML += `<div data-folder=${folder} class="album flex item-center">
            <img src= ./assets/songs/${folder}/cover.jpg alt=""">
            <h2>${info.title}</h2>
            <p>${info.description}</p>
          </div>`;
    }
  }
}

async function addingSong(songUl, songList) {
  for (const song of songList) {
    let title = song.split("-")[0];
    let artist = song.split("-")[1];
    title = title.replaceAll("%20", " ");
    artist = artist.replaceAll("%20", " ");
    artist = artist.replaceAll(".mp3", "");

    songUl.innerHTML += `<li class="flex">
  <img src="./assets/svg/music-icon.svg" alt="music icon" class="invert" />
  <div class="info">
    <div class="title">${title}</div>
    <div class="artist">${artist}</div>
  </div>
</li>`;
  }

  document.querySelectorAll(".song-list li").forEach((e) => {
    let songName =
      e.querySelector(".title").textContent +
      "-" +
      e.querySelector(".artist").textContent +
      ".mp3";
    e.addEventListener("click", () => {
      playMusic(songName);
    });
  });
}

function playMusic(track) {
  currSong.src = `./assets/songs/${currFolder}/` + track;
  currSong.play();
  const play = document.getElementById("play");
  play.src = "./assets/svg/pause-icon.svg";
  document.querySelector(".song-info").innerHTML = track
    .replaceAll("%20", " ")
    .replace(".mp3", "");
}

async function fetchSongList(folder) {
  currFolder = folder;
  let response = await fetch(`http://127.0.0.1:3000/assets/songs/${folder}/`);
  let htmlString = await response.text();
  let container = document.createElement("div");
  container.innerHTML = htmlString;
  let anchorTags = container.getElementsByTagName("a");

  let songUrls = [];

  for (let i = 0; i < anchorTags.length; i++) {
    const anchor = anchorTags[i];
    if (anchor.href.endsWith(".mp3")) {
      songUrls.push(anchor.href.split(`/${folder}/`)[1]);
    }
  }
  return songUrls;
}

async function initializeApp() {
  document.querySelector(".library .heading h1").innerHTML = "Angry Mood";
  await displayAlbum();
  songList = await fetchSongList("angry_mood"); // default folder
  currSong.src = `./assets/songs/${currFolder}/` + songList[0];
  document.querySelector(".song-info").innerHTML = songList[0]
    .replaceAll("%20", " ")
    .replace(".mp3", "");

  currSong.addEventListener("loadedmetadata", () => {
    document.querySelector(".song-time").innerHTML = `00:00/${formatTime(
      currSong.duration
    )}`;
  });
  let songUl = document.querySelector(".song-list > ul");
  await addingSong(songUl, songList);

  const play = document.getElementById("play");
  play.addEventListener("click", () => {
    if (currSong.paused) {
      currSong.play();
      play.src = "./assets/svg/pause-icon.svg";
    } else {
      currSong.pause();
      play.src = "./assets/svg/play-icon.svg";
    }
  });

  const prev = document.querySelector("#prev");
  const next = document.querySelector("#next");
  prev.addEventListener("click", () => {
    console.log("prev");
    let index = songList.indexOf(
      currSong.src.split(`/songs/${currFolder}/`)[1]
    );
    if (index > 0) {
      playMusic(songList[index - 1]);
    }
  });

  next.addEventListener("click", () => {
    console.log("next");
    let index = songList.indexOf(
      currSong.src.split(`/songs/${currFolder}/`)[1]
    );
    if (index < songList.length - 1) {
      playMusic(songList[index + 1]);
    }
  });

  currSong.addEventListener("timeupdate", () => {
    document.querySelector(".song-time").innerHTML = `${formatTime(
      currSong.currentTime
    )}/${formatTime(currSong.duration)}`;
    document.querySelector(".circle").style.left =
      (currSong.currentTime / currSong.duration) * 100 + "%";
  });

  document.querySelector(".seek-bar").addEventListener("click", (e) => {
    const seekBar = document.querySelector(".seek-bar");
    const rect = seekBar.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percent = clickX / rect.width;
    console.log(percent);
    currSong.currentTime = percent * currSong.duration;
    document.querySelector(".circle").style.left = percent * 100 + "%";
  });

  document.querySelectorAll(".album").forEach((element) => {
    element.addEventListener("click", async (e) => {
      document.querySelector(".library .heading h1").innerHTML =
        element.querySelector("h2").textContent;

      songUl.innerHTML = "";
      songList = await fetchSongList(`${element.dataset.folder}`);
      await addingSong(songUl, songList);
    });
  });

  document.querySelector(".volume img").addEventListener("click", (e) => {
    console.log(e.target.src.split("/svg/")[1]);

    let initial = e.target.src.split("/svg/")[0];
    initial += "/svg/";

    if (e.target.src.split("/svg/")[1] === "volume.svg") {
      e.target.src = initial + "mute-icon.svg"; //
      document.querySelector(".range input").value = 0;
      currSong.volume = 0;
    } else {
      currSong.volume = 0.1;
      e.target.src = initial + "volume.svg";
      document.querySelector(".range input").value = currSong.volume * 100;
    }
  });

  document.querySelector(".range input").addEventListener("input", (e) => {
    currSong.volume = parseFloat(e.target.value) / 100;
  });

  document.querySelector(".hamburger").addEventListener("click", () => {
    if (document.querySelector(".library").style.left == "0%") {
      document.querySelector(".library").style.left = "-100%";
    } else {
      document.querySelector(".library").style.left = "0%";
    }
  });
}

initializeApp();
