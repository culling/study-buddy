class Assessment {

    constructor(name, finalGradeWeight, marks, totalMarks) {
        this.name = name;
        this.finalGradeWeight = finalGradeWeight;
        this.marks = marks;
        this.totalMarks = totalMarks
    }

    getMarks() {
        return `${this.marks}/${this.totalMarks}`;
    }

    getScore() {
        return this.marks / this.totalMarks;
    }

    getFinalGradeWeight() {
        return this.finalGradeWeight;
    }

    getFinalGradeImpact() {
        return this.getScore() * this.finalGradeWeight;
    }

    setName(name) {
        this.name = name;
    }

    setMarks(marks) {
        this.marks = marks;
    }

    setTotalMarks(totalMarks) {
        this.totalMarks = totalMarks;
    }

}

class Subject {

    constructor(name, courseCode, displayName) {
        this.name = name;
        this.courseCode = courseCode;
        this.displayName = displayName ? displayName : null;
        this.assessments = [];
        // let enrolement = new Assessment("Enrolement", 0, 100, 100);
        // this.addAssessment(enrolement);
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

    getAssessments() {
        if(this.assessments.length == 0){
            let enrolement = new Assessment("Enrolement", 0, 100, 100);
            this.addAssessment(enrolement);
        }
        return this.assessments;
    }

    addAssessment(assessment) {
        this.assessments.push(assessment);
    }
}

let localStorageSubjects = JSON.parse(localStorage.getItem("subjects"));
let subjects = subjectFromJson(localStorageSubjects);

function subjectFromJson(subjectsFromJsonParse) {
    let subjects = [];
    console.log(subjectsFromJsonParse);

    subjectsFromJsonParse.forEach(subjectFromJson => {
        let newSubject = new Subject(
            subjectFromJson.name ? subjectFromJson.name : "",
            subjectFromJson.courseCode ? subjectFromJson.courseCode : "",
            subjectFromJson.displayName ? subjectFromJson.displayName : ""
        );


        subjectFromJson.assessments.forEach(json => {
            let assessment = new Assessment(json.name, json.finalGradeWeight, json.marks, json.totalMarks);
            console.log("assessment: ", assessment);
            newSubject.addAssessment(assessment);
        });

        subjects.push(newSubject);
    });

    return subjects;
}

function saveSubjectsToLocal(subjects) {
    console.log(subjects);

    localStorage.setItem("subjects", JSON.stringify(subjects));
    // location.reload();
}