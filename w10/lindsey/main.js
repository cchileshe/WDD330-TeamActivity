import QuakesController from "./quakesController.js";
import buildNavigation from "./routing.js";

const parentElement = document.getElementById('mainNav');
buildNavigation(parentElement);

//const myQuakesController = new QuakesController('#quakeList');
//myQuakesController.getQuakesByRadius();