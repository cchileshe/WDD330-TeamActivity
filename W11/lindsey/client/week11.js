//import { makeRequest } from "./authHelpers.js";
import Auth from "./auth.js";
import { makeRequest } from "./authHelpers.js";

/*makeRequest('login', 'POST', {
  password: 'user1',
  email: 'user1@email.com'
  });*/

const myAuth = new Auth();
//myAuth.login();

const submitButton = document.getElementById("submit");
submitButton.addEventListener('click', () => { 
  myAuth.login(getPosts);
});

async function getPosts() {
  try {
    const myData = await makeRequest('posts', 'GET', null, myAuth.token);
    document.getElementById('list').classList.remove('hidden');
    console.log(myData);
    let listOutput = document.getElementById('list');
    listOutput.innerHTML = '';
    myData.forEach(element => {
      let listItem = document.createElement('li');
      listItem.innerHTML = element.title;
      listOutput.appendChild(listItem);
    });
  } catch (error) {
    console.log(error);
  }
}

const postSubmit = document.getElementById("postSubmit");
postSubmit.addEventListener('click', () => {newPost()});

async function newPost() {
  const form = document.forms.formPost;
  console.dir(form);
  const data = {
    title: form.title.value,
    content: form.text.value
  };
  try {
    const res = await makeRequest('posts', 'POST', data, myAuth.token);
    console.log("Post create: ", data);
    form.title.value = '';
    form.text.value = '';
    getPosts();
  } catch (error) {
    console.log(error);
  }
}