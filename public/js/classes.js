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

function subjectFromJson(subjectsFromJson) {
    let subjects = [];
    console.log(subjectsFromJson);

    subjectsFromJson.forEach(subjectFromJson => {
        subjects.push( new Subject(
            subjectFromJson.name ? subjectFromJson.name : "",
            subjectFromJson.courseCode ? subjectFromJson.courseCode : "",
            subjectFromJson.displayName? subjectFromJson.displayName : ""
        ));
    }) ;

    return subjects;
}