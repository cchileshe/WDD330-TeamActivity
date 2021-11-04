async function showPokemon(url = "https://pokeapi.co/api/v2/pokemon") {
  const res = await fetch(url);
  if (res.ok) {
    var data = await res.json();
    
    const tableElement = document.getElementById("poketable").getElementsByTagName("tbody")[0];
    tableElement.innerHTML = "";
    data.results.forEach(e => {
      let row = document.createElement("tr");
      row.innerHTML = `<td><a href="${e.url}">${e.name.charAt(0).toUpperCase() + e.name.slice(1)}</a></td>`;
      tableElement.appendChild(row);
    });

    const buttonElement = document.getElementById("buttons");
    buttonElement.innerHTML = "";
    if (data.previous) {
      let button = document.createElement('button');
      button.innerHTML = "Prev";
      button.onclick = () => showPokemon(data.previous);
      buttonElement.appendChild(button);
    }
    if (data.next) {
      let button = document.createElement('button');
      button.innerHTML = "Next";
      button.onclick = () => showPokemon(data.next);
      buttonElement.appendChild(button);
    }
  }
  else {
    console.log(res.statusText);
  }
}

showPokemon();