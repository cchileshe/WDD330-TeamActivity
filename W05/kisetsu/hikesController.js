import HikeModel from './HikeModel.js';
import HikesView from './HikesView.js';

// Hike controller
export default class HikesController {
  constructor(parentId) {
    this.parentElement = document.getElementById(parentId); 
    // this is how our controller will know about the model and view...we add them right into the class as members.
    this.hikeModel = new HikeModel();
    this.hikesView = new HikesView(parentId);
  }
  
  showHikeList() {
    // this will get called each time we need to display our full hike list. It should grab the list of hikes from the Model, and then send them to the view.
    const hikeList = this.hikeModel.getAllHikes();
    this.hikesView.renderHikeList(this.parentElement, hikeList);
    this.addHikeListener();
  }

  showOneHike(hikeName) {
    // use this when you need to show just one hike...with full details
    const hike = this.hikeModel.getHikeByName(hikeName);
    this.hikesView.renderOneHikeFull(this.parentElement, hike).onclick = function() {
        this.showHikeList();
    };
  }
  
  addHikeListener() {
    // for the stretch you will need to attach a listener to each of the listed hikes to watch for a touchend. 
    const childArray = Array.from(this.parentElement.children);
    console.log(childArray);
    childArray.forEach(child => {
        child.addEventListener("click", e => {
            this.showOneHike(e.currentTarget.dataset.name);
          });
        });
    }
}