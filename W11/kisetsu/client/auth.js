//Auth class which provides basic JWT based authentication for our app.
// Requires: access to the makeRequest  functions
import { makeRequest } from './authHelpers.js';
export default class Auth {
  constructor(errorHandler) {
    this.jwtToken = '';
    this.user = {};
    this.errorHandler = errorHandler;
  }

  async login(callback) {
    // replace the ids below with whatever you used in your form.
    const password = document.getElementById('pass');
    const username = document.getElementById('username');
    try {
      let body = {
        password: password.value,
        email: username.value
      }
      // 1. use the makeRequest function to pass our credentials to the server
      let res = await makeRequest('login', 'POST', body);
      // 2. if we get a successful response...we have a token!  Store it since we will need to send it with every request to the API.
      if (res) {
        this.jwtToken = res.accessToken;
        // let's get the user details as well and store them locally in the class
        // you can pass a query to the API by appending it on the end of the url like this: 'users?email=' + email
        this.user = await this.getCurrentUser(username.value);
        console.log(this.user);
        // hide the login form.
        document.getElementById('login').setAttribute('hidden', true);
        // show the content/create post form
        document.getElementById('content').removeAttribute('hidden');
        document.getElementById('createPost').removeAttribute('hidden');
        // clear the password
        password.value = '';
        
        // since we have a token let's go grab some data from the API by executing the callback if one was passed in
        if(callback) {
          callback();
        }
      }
      else {
        document.getElementById('content').setAttribute('hidden', true);
        document.getElementById('createPost').setAttribute('hidden', true);
      }
    } catch (error) {
      // if there were any errors display them
      this.errorHandler.showError(error.statusText);
    }
  }
  // uses the email of the currently logged in user to pull up the full user details for that user from the database
  async getCurrentUser(email) {
    try {
      // 3. add the code here to make a request for the user identified by email...don't forget to send the token!
      let res = await makeRequest(`users?email=${email}`, 'GET', null, this.jwtToken);
      console.log(res);
      return res[0];
    } catch (error) {
      // if there were any errors display them
      this.errorHandler.showError(error.statusText);
    }
  }
  
  set token(value) {
    // we need this for the getter to work...but we don't want to allow setting the token through this.
  }
  get token() {
    return this.jwtToken;
  }
} // end auth class