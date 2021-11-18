// Quake View handler
export default class QuakesView {
    renderQuakeList(quakeList, listElement) {
        //build a list of the quakes...include the title and time of each quake then append the list to listElement. You should also add the id of the quake record as a data- property to the li. ie. <li data-id="">
        console.log(quakeList)
        listElement.innerHTML = quakeList.features
            .map(quake => {
                return `<div class="earthquake">
                  <div class="quakeTitle">${quake.properties.title}</div>
                  <div class="quakeTime">${new Date(quake.properties.time)}</div>
                </div>`;
            })
            .join('');
    }
    renderQuake(quake, element) {
        const quakeProperties = Object.entries(quake.properties);
        // for the provided quake make a list of each of the properties associated with it. Then append the list to the provided element. Notice the first line of this method. Object.entries() is a slick way to turn an object into an array so that we can iterate over it easier! 
        element.innerHTML = quakeProperties
        .map(item => {
          if (item[0] === 'time' || item[0] === 'updated') {
            return `<li>${item[0]}: ${new Date(item[1])}</li>`;
          } else return `<li>${item[0]}: ${item[1]}</li>`;
        })
        .join('');    
    }
}