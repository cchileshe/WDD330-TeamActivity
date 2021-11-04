
// Fetch url function
async function getAPI(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    return console.log("An error occurred");
  }
}

//Main driving function
async function loadCharacters(url="https://swapi.dev/api/people/") {
  let myData = await getAPI(url);
  renderCharacters(myData.results);
  const next = document.getElementById("next_button");
  const prev = document.getElementById("previous_button");

  //Next Button
  if (myData.next != null) {  
    next.classList.remove("hidden")
    next.onclick = () => {
      loadCharacters(myData.next);
    }
  } else {
    next.classList.add("hidden");
  }

  //Previous Button
  if (myData.previous != null) {
    prev.classList.remove("hidden");
    prev.onclick = () => {
      loadCharacters(myData.previous);
    }
  } else {
    prev.classList.add("hidden");
  }

  // Load page number links
  if (myData.count > 10) {
    showPages(myData.count);
  }
}

//Display the character list
function renderCharacters(characterList) {
  let list = document.getElementById("character_list");
  list.innerHTML = "";
  characterList.forEach(character => {
    let item = document.createElement("li");
    item.classList.add("character");
    item.innerHTML = `<h3>${character.name}</h3>
    <ul id='${character.name}details'></ul>`;

    item.addEventListener("click", function (event) {
      event.preventDefault();
      getCharacterDetails(character.url);
    });
    list.appendChild(item);
  })
}

//Load character details from API
async function getCharacterDetails(url) {
  let character = await getAPI(url);
  renderCharacterDetails(character);
}

//Display character details
function renderCharacterDetails(character) {
  let detailOutput = document.getElementById(`${character.name}details`);
  if (detailOutput.innerHTML === "") {
    detailOutput.innerHTML = `<li>Birth Year: ${character.birth_year}</li>
      <li>Eye Color: ${character.eye_color}</li>
      <li>Gender: ${character.gender}</li>
      <li>Hair Color: ${character.hair_color}</li>
      <li>Height: ${character.height}</li>`;
  } else {
    detailOutput.innerHTML = "";
  }
  
}

//Determine number of page links to display and display them
function showPages(count) {
  const pagesOutput = document.getElementById("page_buttons");
  pagesOutput.innerHTML = "";
  let numPages = Math.ceil(count / 10);

  for (let i = 1; i <= numPages; i++) {
    let item = document.createElement("span");
    item.classList.add("page_span");
    if (i < numPages) item.innerHTML = `${i} - `;
    else item.innerHTML = `${i}`;

    //Add event listener to page numbers
    item.addEventListener("click", function (event) {
      event.preventDefault();
      loadCharacters(`https://swapi.dev/api/people/?page=${i}`);
    });
    pagesOutput.appendChild(item);
  }
}

loadCharacters();