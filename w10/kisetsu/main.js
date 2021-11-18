import QuakeController from './QuakeController.js';
import buildNavigation from './routing.js';

function init(radius, startDate = "2019-01-01", endDate = "2019-03-02") {
  if (!radius) {
    radius = 100;
  }
  const controller = new QuakeController('#quakeList', null, radius, startDate, endDate);
  controller.init();
  document.getElementById("back").onclick = () => {
    controller.getQuakesByRadius();
  }
}

document.getElementById("submit").onclick = () => {
  let radius = document.getElementById("radius").value;
  let startDate = document.getElementById("sdate").value;
  let endDate = document.getElementById("edate").value;

  init(radius, startDate, endDate);
  return false;
};

const navElement = document.getElementById('mainNav');
buildNavigation(navElement);

//init();