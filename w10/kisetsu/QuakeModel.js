import { getJSON } from './utilities.js';

// Quake Model
export default class Quake {
  constructor(startDate, endDate) {
    this.baseUrl =
      `https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=${startDate}&endtime=${endDate}`;
    // this is where we will store the last batch of retrieved quakes in the model.  I don't always do this...in this case the api doesn't have an endpoint to request one quake.
    this._quakes = [];
  }
  async getEarthQuakesByRadius(position, radius) {
    // use the getJSON function and the position provided to build out the correct URL to get the data we need.  Store it into this._quakes, then return it
    const reqUrl = this.baseUrl + `&latitude=${position.lat}&longitude=${position.lon}&maxradiuskm=${radius}`;
    let res = await getJSON(reqUrl);
    this._quakes = res.features;
    return this._quakes;
  }
  getQuakeById(id) {
    // filter this._quakes for the record identified by id and return it
    return this._quakes.filter(item => item.id === id)[0];
  }
}
