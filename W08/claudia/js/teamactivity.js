// let list = document.querySelector("ul");
let list = document.getElementById('names');

let back = document.querySelector(".back");
let forward = document.querySelector(".forward");

let next;
let prev;

getUrl("https://swapi.dev/api/people/");

function getUrl(url){
    
    fetch(url)
        .then((response) => response.json())
        .then((jsonData) => {
            next = jsonData.next;
            prev = jsonData.previous;
    
            // Remove button when previous data is null 
            if (prev === null) {
                back.classList.add("hidden");
            }
            else{
                back.classList.remove("hidden");
            }
            
            // Remove button when next data is null
            if(next === null){
                forward.classList.add("hidden");
            }
            else{
                forward.classList.remove("hidden");
            }
            console.log(jsonData);

            list.innerHTML = "";
            jsonData.results.forEach((person) => {
                list.innerHTML += `<li> ${person.name}</li>`;
            });

        });
}

document.querySelector("#next").addEventListener("click", () => {
    getUrl(next);
})

document.querySelector("#previous").addEventListener("click", () => {
    getUrl(prev);    
})
