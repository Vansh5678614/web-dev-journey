// extracting the songs from the folder songs

// here extracting the addresses of the songs in local

// global
// in data folder put the name of the folder
// w
async function displayAlbum() {
  // currFolder = folder;
  let response = await fetch(
    "http://127.0.0.1:3000/Spotify-clone/assets/songs/"
  );
  let htmlString = await response.text();

  let container = document.createElement("div");
  container.innerHTML = htmlString;
  console.log(container);
  const albums = document.querySelector(".albums") ;
  let anchorTags = container.getElementsByTagName("a");
  for (let i = 0; i < anchorTags.length; i++) {
    const anchor = anchorTags[i];
    if (anchor.href.includes("/assets/songs/")) {
      let b = anchor.href.split("/");
      let folder = b[b.length - 2];
      console.log(folder);
      // get the meta data of the folder
      let response = await fetch(
        `http://127.0.0.1:3000/Spotify-clone/assets/songs/${folder}/info.json`
      );
      // console.log(response) ;
      const info = await response.json();
      console.log(info.title , info.description);
      // add cover of the respective  folder 
      albums.innerHTML += `<div  data-folder="${folder}" class="album flex item-center">
            <img src="cover.jpg" alt="">
            <h2>${info.title}</h2>
            <p>${info.description}</p>

            <div   class="play-btn">
              <img src="./assets/svg/play-icon.svg" alt="play icon" />
            </div>
          </div>`
    }
  }
}

function formatTime(seconds) {
  //can give more meaningful name
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

let currSong = new Audio();
let songList;
let currFolder;

async function addingSong(songList, songUl) {
  for (const song of songList) {
    console.log("before", songUl.innerHTML);
    songUl.innerHTML =
      songUl.innerHTML +
      ` <li>
              <img
                src="./assets/svg/music-icon.svg"
                alt="music icon"
                class="invert"
              />
              <div class="info">
                <div>${song.replaceAll("%20", " ")}</div>
                <div>Song artist</div>
              </div>
              <div class="play-now flex item-center ">
                <span>play now</span>
                <img src="./assets/svg/play-icon.svg" alt="" class="invert" width="24px">
              </div>
            </li>`;

    console.log("after", songUl.innerHTML);
  }
}
function playMusic(track) {
  // it will take input the name of  the music and runs it  is to be asynce function  no run on time
  // let audio = new Audio("./assets/songs/" +track) ;
  currSong.src = `./assets/${currFolder}/` + track;
  currSong.play();
  const play = document.getElementById("play");
  play.src = "./assets/svg/pause-icon.svg";
  document.querySelector(".song-info").innerHTML = track;
  document.querySelector(".song-time").innerHTML = "00:00 / 00:00";
  // play.src =
}

async function fetchSongList(folder) {
  currFolder = folder;
  let response = await fetch(
    `http://127.0.0.1:3000/Spotify-clone/assets/${folder}/` // will add / later
  );
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
  // console.log("hey these are song url",songUrls)

  return songUrls;
}

async function initializeApp() {
  songList = await fetchSongList("songs/cs");
  console.log(songList);
  console.log(Array.isArray(songList)); // true means it IS an array

  // You can now use `songList` to display or play the songs
  currSong.src = `./assets/${currFolder}/` + songList[0];
  console.log(currSong.src);
  document.querySelector(".song-info").innerHTML = songList[0].replaceAll(
    "%20",
    " "
  );
  currSong.addEventListener("loadedmetadata", () => {
    document.querySelector(".song-time").innerHTML = `00:00/${formatTime(
      currSong.duration
    )}`;
  });
  console.log(songList);
  let songUl = document.querySelector(".song-list > ul");
  console.log(songUl);
  console.log("now adding song ");
  await addingSong(songList, songUl);

  // displayAlbum()
  // for (const song of songList) {
  //   console.log("before", songUl.innerHTML);
  //   songUl.innerHTML =
  //     songUl.innerHTML +
  //     ` <li>
  //             <img
  //               src="./assets/svg/music-icon.svg"
  //               alt="music icon"
  //               class="invert"
  //             />
  //             <div class="info">
  //               <div>${song.replaceAll("%20", " ")}</div>
  //               <div>Song artist</div>
  //             </div>
  //             <div class="play-now flex item-center ">
  //               <span>play now</span>
  //               <img src="./assets/svg/play-icon.svg" alt="" class="invert" width="24px">
  //             </div>
  //           </li>`;

  //   console.log("after", songUl.innerHTML);
  // }
  // console.log(songUl) ;

  document.querySelectorAll(".song-list li").forEach((e) => {
    console.log(e.querySelector(".info div").innerHTML);
    e.addEventListener("click", () => {
      playMusic(e.querySelector(".info div").innerHTML); // if not works use trim
    });
  });

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

  // listen for the time update event
  currSong.addEventListener("timeupdate", () => {
    console.log(currSong.currentTime, currSong.duration);
    document.querySelector(".song-time").innerHTML = `${formatTime(
      currSong.currentTime
    )}/${formatTime(currSong.duration)}`;
    document.querySelector(".circle").style.left =
      (currSong.currentTime / currSong.duration) * 100 + "%";
  });

  document.querySelector(".seek-bar").addEventListener("click", (e) => {
    // understand this why it is better than previous one
    // also set explict position
    const seekBar = document.querySelector(".seek-bar");
    const rect = seekBar.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percent = clickX / rect.width;
    console.log(percent);
    currSong.currentTime = percent * currSong.duration;
    document.querySelector(".circle").style.left = percent * 100 + "%";
  });

  const prev = document.querySelector("#prev");
  const next = document.querySelector("#next");

  prev.addEventListener("click", () => {
    console.log("prev");
    console.log(typeof songList);
    let index = songList.indexOf(currSong.src.split("/songs/")[1]);
    console.log(currSong.src.split("/songs/")[1]);
    console.log(songList, index);

    if (index > 0) {
      playMusic(songList[index - 1]);
    }
  });
  next.addEventListener("click", () => {
    console.log("next");
    console.log(currSong.src);
    // console.log(currSong.src.split("/").slice(-1))[0]
    console.log(typeof songList);
    let index = songList.indexOf(currSong.src.split("/songs/")[1]);
    // console.log(currSong.src.split("/songs/")[1])
    // console.log(songList , index)

    if (index < songList.length - 1) {
      playMusic(songList[index + 1]);
    }
  });

  // add an event to the volume
  document.querySelector(".range input").addEventListener("change", (e) => {
    // console.log(e , e.target , e.target.value);
    currSong.volume = parseFloat(e.target.value) / 100;
  });

  // load the playlist whenever the card is clicked (album )
  document.querySelectorAll(".album").forEach((element) => {
    console.log(element);
    console.log(element.dataset.folder);

    element.addEventListener("click", async () => {
      songUl.innerHTML = "";
      //now load the folder
      songList = await fetchSongList(`songs/${element.dataset.folder}`);
      console.log(songList);
      // now load the song  can  make separate function
      addingSong(songList, songUl);
    });
  });

  // add event listener to mute the track 
  document.querySelector(".volume img").addEventListener('click', 
    (e) => {
      console.log(e.target.src.split("/svg/")[1] );
      // if (e.target.src ==="volume.svg"){
      //   e.target.src = "mut"
      // }
      let initial = e.target.src.split("/svg/")[0]
      // can use includes 
      if(e.target.src.split("/svg/")[1]=== "volume.svg"){
        e.target.src = initial+ 'mute.svg' ; // can use replace function 
        currSong.volume =0 
        // also update volume bar do value 0
      }
      else{
      currSong.volume =0.1 ;
      e.target.src = initial+ 'volume.svg' ;
      // then do volume 10 
      }
    }
    
  )
  // now play the song        hio
  // let audio = new Audio(songList[2])

  // audio.play() ;

  // audio.addEventListener("loadeddata", () => {
  //   console.log(audio.currentSrc);
  // }
  // )
  // attach event listener to the control btn
}

initializeApp();
