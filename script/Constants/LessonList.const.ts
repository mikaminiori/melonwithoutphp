/// <reference path="../LessonList.ref.ts"/>

namespace LESSON_LIST {

    export class Language {
        languageList: string[] = ["English", "Japanese", "Finnish"];
        language: string = _.include(this.languageList, $.getUrlVar("lang")) ? $.getUrlVar("lang") : "English";
    }

    export var listUrls = {
        English: "storage/lesson/list/lessonList.en.json",
        Japanese: "storage/lesson/list/lessonList.ja.json",
        Finnish: "storage/lesson/list/lessonList.fi.json",
    }

    export class choose {
        script = {
            English: "Choose a lesson!",
            Japanese: "レッスンをえらぼう！",
            Finnish: "Valitse oppitunti!",
        };
    }

    import HTMLView = INDEX.HTMLView;

	export import UserName = INDEX.UserName;

    export class JSONList implements HTMLView {
        selector = "#lessonList";
        language = new Language().language;
        listUrl = listUrls[this.language];
        childClasses = {
            header: "header",
            title: "title",
            description: "description",
        };
        title = {
            English: "Title",
            Japanese: "だいめい",
            Finnish: "Otsikko",
        };
        description = {
            English: "Description",
            Japanese: "せつめい",
            Finnish: "Kuvaus",
        };
        practiceModeUrl: string = `Lesson.html?lang=${this.language}&lesson=`;
        images: { [name: string]: string } = {};
        audios: { [name: string]: string } = {};
    }
}