import CharacterHandler from "./character_handler.js";
import Character from "./character.js";



const view = {
  parentElement: document.getElementById("character_list"),
  loadButton: document.getElementById("people_button"),
  nextButton: document.getElementById("next_button"),
  previousButton: document.getElementById("previous_button")
}

view.loadButton.addEventListener("click", loadCharacters('https://swapi.dev/api/people/'));

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
  let newCharacterList = [];
  myData.results.forEach(character => {
    let myCharacter = new Character(character);
    newCharacterList.push(myCharacter)
  });
  let myCharacterHandler = new CharacterHandler(myData.count, myData.next, myData.previous, newCharacterList);
  console.log(myCharacterHandler);
  renderCharacters(myCharacterHandler.character_list);
  console.log(myCharacterHandler.character_list);
  renderCharacters(myCharacterHandler.character_list);
  renderNextButtons(myCharacterHandler.nextURL);
  renderPreviousButton(myCharacterHandler.previousURL);
  
}

function renderNextButtons(nextUrl) {
  if (nextUrl) {
    view.nextButton.classList.remove("hidden");
    //view.nextButton.setAttribute("onclick", ));
  } else {
    view.nextButton.classList.add("hidden");
    view.nextButton.removeAttribute("onclick");
  }
}

function renderPreviousButton(previousUrl) {
  if (previousUrl) {
    view.previousButton.classList.remove("hidden");
    //view.previousButton.setAttribute("onclick", );
  } else {
    view.previousButton.classList.add("hidden");
    view.previousButton.removeAttribute("onclick");
  }
}

function renderCharacters(characterList) {
  let list = view.parentElement;
  view.parentElement.innerHTML = "";
  characterList.forEach(character => {
    let item = document.createElement("li");
    item.classList.add("character");
    item.innerHTML = `<h3>${character.name}`;

    item.addEventListener("click", function (event) {
      event.preventDefault();
      getCharacterDetails(character.url);
    });
    list.appendChild(item);
  })
}

