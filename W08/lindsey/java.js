
async function getAPI(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    //console.log(data);
    return data;
  } catch (error) {
    return console.log("An error occurred");
  }
}

async function loadCharacters(url="https://swapi.dev/api/people/") {
  let myData = await getAPI(url);
  renderCharacters(myData.results);
  //console.log(myData);
  const next = document.getElementById("next_button");
  const prev = document.getElementById("previous_button");

  if (myData.next != null) {  
    next.classList.remove("hidden")
    next.onclick = () => {
      loadCharacters(myData.next);
    }
  } else {
    next.classList.add("hidden");
  }

  if (myData.previous != null) {
    prev.classList.remove("hidden");
    prev.onclick = () => {
      loadCharacters(myData.previous);
    }
  } else {
    prev.classList.add("hidden");
  }

  if (myData.count > 10) {
    //console.log(myData);
    showPages(myData.count);
  }
}

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

async function getCharacterDetails(url) {
  let character = await getAPI(url);
  renderCharacterDetails(character);
}

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

function showPages(count) {
  const pagesOutput = document.getElementById("page_buttons");
  pagesOutput.innerHTML = "";
  let numPages = Math.ceil(count / 10);
  //console.log(numPages);

  for (let i = 1; i <= numPages; i++) {
    let item = document.createElement("span");
    item.classList.add("page_span");
    if (i < numPages) item.innerHTML = `${i} - `;
    else item.innerHTML = `${i}`;

    item.addEventListener("click", function (event) {
      event.preventDefault();
      loadCharacters(`https://swapi.dev/api/people/?page=${i}`);
    });
    pagesOutput.appendChild(item);
  }
}

loadCharacters();