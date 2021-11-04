
class Comments {
    constructor(type) {
        this.type = type;
        this.commentList = [];
        let lsComments = window.localStorage.getItem(this.type);
        if (lsComments) {
            this.comments = JSON.parse(lsComments);
        }
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

    filterCommentsByName(name) {
        return this.commentList.filter(comment => comment.name == name);
    }

    addComment(name, comment) {
        let commentObject = {
            name,
            comment,
            date: new Date()
        };
        this.commentList.push(commentObject);
        window.localStorage.setItem(this.type, JSON.stringify(this.commentList));
    }
}

export default class Comment {
    constructor(type, elementId) {
        this.commentModel = new Comments(type);
        this.type = type;
        this.elementId = elementId;
    }

    showAllComments(name = null) {
        let comments;
        if (name) {
            comments = this.commentModel.filterCommentsByName(name);
            renderCommentForm();
        } else {
            comments = this.commentModel.getAllComments();
        }
        renderCommentList(this.elementId, comments);
    }

    addCommentListener(name) {
        document.getElementById('submit_button').onclick = () => {
            let comment = document.getElementById("comment_text").value;
            this.commentModel.addComment(name, comment);
            this.showAllComments(name);
        }
    }
}

function renderCommentList(elementId, comments) {
    let element = document.getElementById(elementId);
    element.innerHTML = '';
    comments.forEach(c => {
        let myComment = document.createElement('li');
        myComment.innerHTML = `${c.name} - ${c.date}<hr> ${c.comment}`;
        element.append(myComment);
    })
}

function renderCommentForm() {
    let element = document.getElementById('comment_form');
    element.innerHTML = `<h2>Add Comment:</h2>
        <input type="text" id="comment_text">
        <button id="submit_button">Submit</button>`;
}