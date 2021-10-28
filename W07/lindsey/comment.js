

export default class Comment {

    constructor(name, date, content, type = "hike") {
        this.name = name;
        this.date = date;
        this.content = content;
        this.type = type;
    }
}
