import Auth from './auth.js';
import { makeRequest } from './authHelpers.js';

const mAuth = new Auth();

const btnLogin = document.getElementById('btnLogin');

btnLogin.addEventListener('click', () => {
    mAuth.login(getPosts);
});

async function getPosts() {
    const credentials = await makeRequest('posts', 'GET', null, mAuth.token);
    // make sure the element is shown
    document.getElementById('content').classList.remove('hidden');
    console.log(credentials);
    var ul = document.getElementById('commentList');
    ul.innerHTML = '';
    for (var i = 0; i < credentials.length; i++) {
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(credentials[i].title));
        ul.appendChild(li);
    }
}

const btnComment = document.getElementById('btnComment');
const title = document.getElementById('title');
const comment = document.getElementById('comment');

async function createPost() {
    if(title.validity.valid && comment.validity.valid) {
        const postUserComment = {
            title: title.value,
            content: comment.value
        };

        const credentials = await makeRequest('posts', 'POST', postUserComment, mAuth.token);
        console.log('Post create:', postUserComment);
        title.value = '';
        comment.value = '';
        getPosts();
    }
}

btnComment.addEventListener('click', () => {
    createPost();
});