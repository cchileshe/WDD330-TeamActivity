import { getJSON } from './utilities.js';
// Quake Model
export default class Quake {
    constructor() {
        this.baseUrl = 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-03-02';
        // this is where we will store the last batch of retrieved quakes in the model.
        this._quakes = [];
    }

    async getEarthQuakesByRadius(position, radius = 100) {
        let url = new URL(this.baseUrl)
        url.searchParams.append("latitude", position.coords.latitude)
        url.searchParams.append("longitude", position.coords.longitude)
        url.searchParams.append("maxradiuskm", radius)
            //example full url: https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-03-02&latitude=43.814540699999995&longitude=-111.78491029999999&maxradiuskm=100


        this._quakes = await getJSON(url)
        return this._quakes;
    }
}


