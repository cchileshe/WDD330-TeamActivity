import Comment from "./comment.js";

let commentList = [];

export default class Comments {
    constructor(elementId) {
        this.parentElement = document.getElementById(elementId);
    }

    showAllComments() {
        this.parentElement = "";
        this.getAllComments().forEach(comment => {
            this.parentElement.appendChild(renderOneComment(comment));
        });
        
    }

    showCommentsForHike() {
        this.addCommentSubmitListener();
        
    }

    addCommentSubmitListener() {

    }

    addComment() {
        
    }

    addCommentToList(comment) {
        this.commentList.push(comment);
    }

    getAllComments() {
        return this.commentList;
    }

    filterCommentsByType(type) {
        if (type === "hike") {
            const hikeComments = commentList.filter(comment => comment.type == "hike");
            return hikeComments;
        } else {
            const allComments = commentList;
            return allComments;
        }
    }

    filterCommentsByName(myComment) {
        let filteredList = this.commentList.filter(comment => comment.name == myComment.name);
        return filteredList;
    }

    
}

function renderOneComment(comment) {
    const item = document.createElement('li');
    item.innerHTML = `
      <h3>${comment.name}</h3>
      <p>${comment.date}</p>
      <p>${comment.content}</p>`
    return item;
  }