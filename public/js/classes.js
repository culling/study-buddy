class Subject {
    constructor(name, courseCode, displayName) {
        this.name = name;
        this.courseCode = courseCode;
        this.displayName = displayName? displayName : null
        ;
    }

    getDisplayName() {
        if ((this.displayName != null) && (this.displayName.length > 0)) {
            return this.displayName;
        }
        return `${this.courseCode} - ${this.name}`;
    }

    getShortName() {
        if ((this.shortName != null) && (this.shortName.length > 0)) {
            return this.shortName;
        }
        return `${this.courseCode}`;
    }
}

let localStorageSubjects = JSON.parse(localStorage.getItem("subjects"));
let subjects = subjectFromJson(localStorageSubjects);

function subjectFromJson(subjectsFromJsonParse) {
    let subjects = [];
    console.log(subjectsFromJsonParse);

    subjectsFromJsonParse.forEach(subjectFromJson => {
        subjects.push( new Subject(
            subjectFromJson.name ? subjectFromJson.name : "",
            subjectFromJson.courseCode ? subjectFromJson.courseCode : "",
            subjectFromJson.displayName? subjectFromJson.displayName : ""
        ));
    }) ;

    return subjects;
}

function saveSubjectsToLocal(subjects){
    console.log(subjects);

    localStorage.setItem("subjects", JSON.stringify(subjects));
    location.reload();
}