/*function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('playing');
}

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (!audio) return;

  key.classList.add('playing');
  audio.currentTime = 0;
  audio.play();
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);*/


document.addEventListener("keydown", function(e) {
  var myCode = e.keyCode;
  //let myKey = document.querySelector(`div[data-key="${myCode}"]`);
  let myAudio = document.querySelector(`audio[data-key="${myCode}"]`);
  if (myAudio != null) {
    myAudio.play();
  }
  

  

  /*switch (myKey) {
    case 'a':
      let audioSrc = document.querySelector(`audio[data-key="${e.code}"]`).src;
      let audioA = new Audio(audioSrc);
      audioA.play();
      break;
    case 's':
      let audioS = new Audio('sounds/hihat.wav');
      audioS.play();
      break;
    case 'd':
      let audioD = new Audio('sounds/kick.wav');
      audioD.play();
      break;
    case 'f':
      let audioF = new Audio('sounds/openhat.wav');
      audioF.play();
      break;
    case 'g':
      let audioG = new Audio('sounds/boom.wav');
      audioG.play();
      break;
    case 'h':
      let audioH = new Audio('sounds/ride.wav');
      audioH.play();
      break;
    case 'j':
      let audioJ = new Audio('sounds/snare.wav');
      audioJ.play();
      break;
    case 'k':
      let audioK = new Audio('sounds/tom.wav');
      audioK.play();
      break;
    case 'l':
      let audioL = new Audio('sounds/tink.wav');
      audioL.play();
      break;
    default:
      console.log("Another letter was pressed.");
  }*/
});
