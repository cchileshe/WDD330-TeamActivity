
let myKeyCounts = {'A':0, 'S':0, 'D':0, 'F':0, 'G':0, 'H':0, 'J':0, 'K':0, 'L':0};

document.addEventListener("keydown", function(e) {
  let myKey = document.querySelector(`div[data-key="${e.keyCode}"]`);
  let myAudio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  if (myAudio != null) {
    myAudio.currentTime = 0;
    myAudio.play();
    myKey.classList.add('playing');
  }
  setTimeout(function() {
    myKey.classList.remove('playing');
  }, 200);
  moveKey(myKey);
});

function moveKey(key) {
  const myLetter = key.getElementsByTagName('kbd')[0].innerHTML;
  if (myKeyCounts[myLetter] > 8) {
    myKeyCounts[myLetter] = 0;
    resetKey(key);
  } else {
    myKeyCounts[myLetter]++;
    moveDown(key, myLetter);
  }
}

function moveDown(key, myLetter) {
  let letterPosition = -10 * myKeyCounts[myLetter];
  key.style.transform = "translateY(" + (-1 * letterPosition) + "px)";
  console.log(myKeyCounts);
  console.log("moved down");
}

function resetKey(key) {
  key.style.transform = "translateY(0px)";
  console.log("reset");
  console.log(myKeyCounts);
}