
import { getJSON, getLocation } from './utilities.js';
import QuakeController from './controller.js';

const baseURL = 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-02-02';

const controller = new QuakeController("#quakeList");
controller.init();

document.querySelector('#radiusButton').addEventListener('click', () => {
    console.log("value: ", document.querySelector('#radiusInput').value)
    if(document.querySelector('#radiusInput').value != '') {
        controller.radius = document.querySelector('#radiusInput').value
        controller.getQuakesByRadius()
    }
})