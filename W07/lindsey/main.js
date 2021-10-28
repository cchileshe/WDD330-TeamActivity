import Hikes from './hikes.js';
import Comments from './comments.js';

const myHikes = new Hikes("hikes");
const myComments = new Comments("comments");
//on load grab the array and insert it into the page
window.addEventListener("load", () => {
  myHikes.showAllHikes();
  myComments.showAllComments();
});

