import Hikes from './hikes.js';

const myHikes = new Hikes("hikes");
//on load grab the array and insert it into the page
window.addEventListener("load", () => {
  myHikes.showAllHikes();
});

