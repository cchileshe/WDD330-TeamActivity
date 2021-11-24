import Auth from './auth.js';
import { Errors, makeRequest } from './authHelpers.js';

const errorHandler = new Errors("errors");
const auth = new Auth(errorHandler);

async function getPosts() {
  let res = await makeRequest('posts', 'GET', null, auth.token);
  console.log(res);
  let parent = document.getElementById("posts");
  parent.innerHTML = "";
  res.forEach(element => {
    parent.innerHTML += `<li>${element.title}: ${element.content}</li>`;
  });
}

async function createPost() {
  errorHandler.clearError();
  let title = document.getElementById("title");
  let content = document.getElementById("content1");
  if (title.value && content.value) {
    let body = {
      title: title.value, 
      content: content.value
    }
    try {
      let res = await makeRequest('posts', 'POST', body, auth.token);
      console.log(res);
      title.value = "";
      content.value = "";
      getPosts();  
    } catch (error) {
      errorHandler.showError(error);
    }
  }
  else {
    errorHandler.showError("Please fill in both form values for posts.");
  }
}

document.getElementById("submitButton").onclick = () => {
  auth.login(getPosts);
}

document.getElementById("submitPostButton").onclick = () => {
  if (auth.token) {
    createPost();
  }
}