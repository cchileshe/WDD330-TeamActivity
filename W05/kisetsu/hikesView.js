// Hike View handler
export default class HikesView {
    constructor(listElementId) {
        // will need this
        this.imgBasePath = "//byui-cit.github.io/cit261/examples/";
    }
  renderHikeList(listElement, hikeList) {
    // loop through our list of hikes building out the appropriate HTML for each and append it to the listElement
    listElement.innerHTML = "";
    hikeList.forEach(hike => {
        listElement.appendChild(this.renderOneHikeLight(hike));
    });
  }
  renderOneHikeLight(hike) {
    // this method will be used to create the list of hikes with less detail: name, image, distance, difficulty 
    const e = document.createElement("li");
    e.classList.add("light");
    e.setAttribute("data-name", hike.name);
    e.innerHTML = ` <h2>${hike.name}</h2>
    <div class="image"><img src="${this.imgBasePath}${hike.imgSrc}" alt="${hike.imgAlt}"></div>
    <div>
        <div>
            <h3>Distance</h3>
            <p>${hike.distance}</p>
        </div>
        <div>
            <h3>Difficulty</h3>
            <p>${hike.difficulty}</p>
        </div>
    </div>`;

    return e;
  }
  renderOneHikeFull(parentElement, hike) {
    // this method will be used to one hike with full detail...you will need this for the stretch goal! 
    const e = document.createElement('li');
    e.classList.add("full");
    e.innerHTML = `<button>< Go Back to Hike List</button>
            <h2>${hike.name}</h2>
            <img src="${this.imgBasePath}${hike.imgSrc}" alt="${hike.imgAlt}">
            <div>
                <h3>Distance</h3>
                <p>${hike.distance}</p>
            </div>
            <div>
                <h3>Difficulty</h3>
                <p>${hike.difficulty}</p>
            </div>
            <div>
                <h3>Description</h3>
                <p>${hike.description}</p>
            </div>
            <div>
                <h3>How to get there</h3>
                <p>${hike.directions}</p>
            </div> `;
    parentElement.innerHTML = '';
    parentElement.appendChild(e);
    return e;
  }
}