  // Quake View handler
  export default class QuakesView {
    renderQuakeList(quakeList, listElement) {
      //build a list of the quakes...include the title and time of each quake then append the list to listElement. You should also add the id of the quake record as a data- property to the li. ie. <li data-id="">
      listElement.innerHTML = quakeList
      .map(quake => {
        return `<li data-id=${quake.id} class="list">${quake.properties.title}: ${new Date(quake.properties.time)}</li>`;
      }).join('');
    }

    renderQuake(quake, element) {
      if (quake) {
        const quakeProperties = Object.entries(quake.properties);
        // for the provided quake make a list of each of the properties associated with it. Then append the list to the provided element. Notice the first line of this method. Object.entries() is a slick way to turn an object into an array so that we can iterate over it easier!
        element.innerHTML = "";
        quakeProperties.forEach(q => {
          let label = q[0];
          let value = q[1];
          if (label === "updated" || label === "time") value = new Date(q[1]);
          element.innerHTML += `<li>${label}: ${value}</li>`;
        })
      }
      else {
        console.log("Skipped");
      }
    }
  }
  