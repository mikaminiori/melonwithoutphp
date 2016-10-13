/// <reference path="../LessonList.ref.ts"/>

class JSONList extends HTMLView{
    constructor(private constants: LESSON_LIST.JSONList) {
        super(constants);
        this.makeHeader();
        this.getJSON();
    }

    private getJSON() {
        $.ajaxSetup({ async: false });
        $.getJSON(this.constants.listUrl, (data) => { this.makeList(data); });
        $.ajaxSetup({ async: true });
    }

    private makeHeader() {
        var header = $(`<tr></tr>`);
        header.append($(`<th></th>`).append(this.constants.title[this.constants.language]));
        header.append($(`<th></th>`).append(this.constants.description[this.constants.language]));
        this.$.append(header);
    }

    private makeRow(lesson: Object, title: string) {
        if (!lesson["public"]) return;
        var row = $(`<tr></tr>`);
        row.append($(`<td><a href=${this.constants.practiceModeUrl + title}>${title}</a></td>`)
            .addClass(this.constants.childClasses["title"]));
        row.append($("<td></td>").append(lesson["description"])
            .addClass(this.constants.childClasses["description"]));
        this.$.append(row);
    }

    private makeList(list: { [lesson: string]: Object }) {
        _.each(list, (lesson, title) => { this.makeRow(lesson, title); })
    }
}