class CommentModel {
  constructor(type) {
    this.type = type;
    this.comments = [];
    let lsComments = window.localStorage.getItem(this.type);
    if (lsComments) {
      this.comments = JSON.parse(lsComments);
    }
  }

  getAllComments() {
    return this.comments;
  }

  filterCommentsByName(name) {
    return this.comments.filter(c => c.name === name);
  }

  addComment(name, comment) {
    let commentObject = {
      name,
      comment,
      date: new Date()
    };
    this.comments.push(commentObject);
    window.localStorage.setItem(this.type, JSON.stringify(this.comments));
  }
}

export default class Comment {
  constructor(type, elementId) {
    this.commentModel = new CommentModel(type);
    this.type = type;
    this.elementId = elementId;
  }

  renderCommentList(elementId, comments) {
    let element = document.getElementById(elementId);
    element.innerHTML = '';
    comments.forEach(c => {
      let comment = document.createElement("li");
      comment.innerHTML = `${c.name} - ${c.date}<hr>${c.comment}`;
      element.append(comment);
    })
  }

  renderCommentForm() {
    let element = document.getElementById("commentForm");
    element.innerHTML = `<h2>Add Comment</h2>
    <input type="text" id="commentText" />
    <button id="submitButton">Comment</button>`
  }

  showCommentsList(name = null) {
    let comments;
    if (name) {
      comments = this.commentModel.filterCommentsByName(name);
      this.renderCommentForm();
    }
    else {
      comments = this.commentModel.getAllComments();
    }
    this.renderCommentList(this.elementId, comments);
  }

  addCommentListner(name) {
    document.getElementById("submitButton").ontouchend = () => {
      let comment = document.getElementById("commentText").value;
      this.commentModel.addComment(name, comment);
      this.showCommentsList(name);
    }
  }
}