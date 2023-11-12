const Ar = [
  { name:"Im still standing",
  },
  { name:"A veces solo necesitamos escuchar está canción",
  },
  { name:"Cronómetro - 4x3 (Video Oficial)",
  },
  { name:"Ella es bonita-Letra- (Natalia Lafourcade)",
  },
  { name:"Jósean Log - Alguien Como Tú",
  },
  { name:"Le di a Cupido una Segunda Oportunidad💕✨️  Cupid - Fifty Fifty Twin Ver.『AMV』Letra",
  },
  { name:"si te dedicaron está canción, ahí es ♡",
  },
  { name:"Una canción que solo les pertenece a Ugetsu y Akihiko",
  },
  { name:"¿Como fue que me dejaste de amar",
  }
  
]
const searchInput = document.getElementById('Buscador');
const optionsList = document.getElementById('List');
const options = optionsList.getElementsByTagName('li');
const audio = document.getElementById("audio")
const icon_play = document.getElementById("play")
const list = document.getElementById("List")
let title_main = document.getElementById("title")
let progressArea = document.querySelector(".progress-area")
let progressBar = progressArea.querySelector(".progress-bar")
const next = document.getElementById("next")
const prev = document.getElementById("prev")
let img = document.getElementById("img")
let ti ;
let title = 1;
searchInput.addEventListener('input', function () {
  const searchTerm = searchInput.value.toLowerCase();

  for (let i = 0; i < options.length; i++) {
    const optionText = options[i].innerText.toLowerCase();

    if (optionText.includes(searchTerm)) {
      options[i].style.display = 'block';
    } else {
      options[i].style.display = 'none';
    }
  }
});

list.addEventListener('click',(event)=>{
  const target = event.target;
      if (target.tagName === 'LI') {
        const audioSource = target.getAttribute('src');
        title = target.getAttribute('id');
        if (audioSource) {
          audio.src = audioSource;
          play();
          title_main.innerText =target.getAttribute('class');
        }
      }
})

function play(){
  icon_play.querySelector("i").innerText ="pause";
  audio.play();
  const id = document.getElementById(title);
  title_main.innerHTML= Ar[title-1].name;
  img.classList.toggle("play");
}
function pause (){
  icon_play.querySelector("i").innerText ="play_arrow";
  audio.pause();
}
icon_play.addEventListener("click", () => {
  if (audio.paused) {
    play();
  } else {
    pause();
  }
});
function ne(){
  
  if(title<=8){
    title++
    audio.src = "./auidio/" + title+".mp3";
    play()
    icon_play.querySelector("i").innerText ="pause";
  }
  else{
    title=0;
    title++
    audio.src = "./auidio/" + title+".mp3";
    play()
    icon_play.querySelector("i").innerText ="pause";
  }
}
function pre(){
  if(title>1){
    title--
    audio.src = "./auidio/" + title+".mp3";
    play();
    icon_play.querySelector("i").innerText ="pause";
  }
  else{
    title=10;
    title--
    audio.src = "./auidio/" + title+".mp3";
    play();
    icon_play.querySelector("i").innerText ="pause";
  }
}
next.addEventListener("click",()=>{
  ne();
  
})
prev.addEventListener("click",()=>{
  pre();
})

audio.addEventListener("timeupdate", (e)=>{
  const currentTime = e.target.currentTime;
  const duration = e.target.duration;
  let progressWidth = (currentTime / duration) * 100;
  progressBar.style.width = `${progressWidth}%`;
  let musicCurrentTime = document.querySelector(".current-time")
  let musicDuartion = document.querySelector(".max-duration");
  audio.addEventListener("loadeddata", ()=>{
    let mainAdDuration = audio.duration;
    let totalMin = Math.floor(mainAdDuration / 60);
    let totalSec = Math.floor(mainAdDuration % 60);
    if(totalSec < 10){
      totalSec = `0${totalSec}`;  
    }
    musicDuartion.innerHTML= totalMin+ ":" +totalSec;
  });
  let currentMin = Math.floor(currentTime / 60);
  let currentSec = Math.floor(currentTime % 60);
  if(currentSec < 10){
    currentSec = `0${currentSec}`;
  }
  musicCurrentTime.innerText = `${currentMin}:${currentSec}`;
});